function calculateBMI(weight, height) {
    if (weight > 0 && height > 0) {
      const heightInMeters = height / 100;
      const bmi = weight / (heightInMeters * heightInMeters);
      return bmi;
    }
    return 0;
  }
  
  function getStatus(bmi) {
    if (bmi < 18.5) {
      return 'Дефицит массы тела';
    } else if (bmi >= 18.5 && bmi < 25) {
      return 'Нормальный вес';
    } else if (bmi >= 25 && bmi < 30) {
      return 'Избыточный вес';
    } else {
      return 'Ожирение';
    }
  }
  
  const weightInput = document.getElementById('weight');
  const heightInput = document.getElementById('height');
  const bmiDisplay = document.getElementById('bmi');
  const statusDisplay = document.getElementById('status');
  
  function updateBMI() {
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);
  
    const bmi = calculateBMI(weight, height);
    bmiDisplay.textContent = bmi.toFixed(2);
    statusDisplay.textContent = `Статус: ${getStatus(bmi)}`;
  }
  
  weightInput.addEventListener('input', updateBMI);
  heightInput.addEventListener('input', updateBMI);
  