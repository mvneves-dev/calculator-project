function calcular() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operador = document.getElementById('operador').value;
    const resultadoElement = document.getElementById('resultado');
    
    if (isNaN(num1) || isNaN(num2)) {
        resultadoElement.textContent = 'Preencha os números!';
        resultadoElement.style.color = '#e74c3c';
        return;
    }
    
    let resultado;
    
    if (operador === '+') resultado = num1 + num2;
    else if (operador === '-') resultado = num1 - num2;
    else if (operador === '*') resultado = num1 * num2;
    else if (operador === '/') {
        resultado = num2 !== 0 ? num1 / num2 : 'Erro: divisão por zero';
    }
    
    if (typeof resultado === 'number') {
        resultadoElement.textContent = `${num1} ${operador} ${num2} = ${resultado.toFixed(2)}`;
        resultadoElement.style.color = '#333';
    } else {
        resultadoElement.textContent = resultado;
        resultadoElement.style.color = '#e74c3c';
    }
}

document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') calcular();
});
