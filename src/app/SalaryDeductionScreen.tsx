import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput, Button, Card, Title, Paragraph } from 'react-native-paper';

const SalaryDeductionScreen = () => {
  const [wholeSalary, setWholeSalary] = useState('');
  const [creditedSalary, setCreditedSalary] = useState('');
  const [deductionDetails, setDeductionDetails] = useState(null);

  const calculateDeduction = () => {
    const whole = parseFloat(wholeSalary);
    const credited = parseFloat(creditedSalary);

    if (isNaN(whole) || isNaN(credited)) {
      alert('Please enter valid numbers for both salaries.');
      return;
    }

    const tenPercentDebited = whole * 0.1;
    console.log('total_per', tenPercentDebited);

    const salaryWithTDS = whole - tenPercentDebited;
    // const salaryWithTDS = whole - remainingSalary;
    const salaryWithoutTDS = salaryWithTDS - (salaryWithTDS * 0.1);
    const expectedDiff = salaryWithoutTDS - credited;
    if (expectedDiff) {
      const fullDayCost = salaryWithoutTDS / 30;
      const halfDayCost = fullDayCost / 2;
      const fullLeaves = Math.floor(expectedDiff / fullDayCost);
      const remainingDeduction = expectedDiff - (fullLeaves * fullDayCost);
      const halfDays = Math.round(remainingDeduction / halfDayCost);
      setDeductionDetails({
        Loyalty_Bonus: (whole * 0.1).toFixed(2),
        TDS: ((credited / 0.9)*0.1).toFixed(2),
        leaves: fullLeaves,
        halfDays: halfDays,
      });
    }
    else {
      setDeductionDetails({
        Loyalty_Bonus: (whole * 0.1).toFixed(2),
        TDS: (salaryWithTDS * 0.1).toFixed(2),
        leaves: 0,
        halfDays: 0,
      });
    }
    // const finalDeduction = finalRemainingSalary * 0.1;

    // const totalDeduction = tenPercentDebited + finalDeduction;
    // const leaves = totalDeduction / (whole * 0.02); // Assuming 2% of salary equals 1 leave
    // const halfDays = leaves * 2;


  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Salary Deduction Calculator</Title>

      <Card style={styles.card}>
        <Card.Content>
          <TextInput
            label="Whole Salary"
            mode="outlined"
            value={wholeSalary}
            onChangeText={setWholeSalary}
            keyboardType="numeric"
            style={styles.input}
          />
          <TextInput
            label="Credited Salary"
            mode="outlined"
            value={creditedSalary}
            onChangeText={setCreditedSalary}
            keyboardType="numeric"
            style={styles.input}
          />
          <Button
            mode="contained"
            onPress={calculateDeduction}
            style={styles.button}
          >
            Calculate
          </Button>
        </Card.Content>
      </Card>

      {deductionDetails && (
        <Card style={styles.resultCard}>
          <Card.Content>
            <Title>Results</Title>
            <Paragraph>Loyalty Bonus: ₹{deductionDetails.Loyalty_Bonus}</Paragraph>
            <Paragraph>TDS: ₹{deductionDetails.TDS}</Paragraph>
            <Paragraph>Estimated Leaves: {deductionDetails.leaves}</Paragraph>
            <Paragraph>Estimated Half Days: {deductionDetails.halfDays}</Paragraph>
          </Card.Content>
        </Card>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
  },
  card: {
    marginBottom: 20,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    elevation: 4,
  },
  input: {
    marginBottom: 15,
  },
  button: {
    marginTop: 10,
    backgroundColor: '#6200ee',
  },
  resultCard: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    elevation: 4,
    padding: 10,
  },
});

export default SalaryDeductionScreen;
