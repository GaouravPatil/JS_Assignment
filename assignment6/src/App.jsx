import React, { useState } from 'react';

const CounterApp = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#e0f2fe',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    },
    card: {
      backgroundColor: '#ffffff',
      padding: '40px',
      borderRadius: '12px',
      boxShadow: '0 4px 6px rgba(2, 132, 199, 0.1)',
      textAlign: 'center',
      minWidth: '320px'
    },
    title: {
      margin: '0 0 10px 0',
      color: '#0f172a',
      fontSize: '24px'
    },
    countDisplay: {
      fontSize: '64px',
      fontWeight: 'bold',
      color: '#0284c7',
      margin: '20px 0'
    },
    buttonContainer: {
      display: 'flex',
      gap: '12px',
      justifyContent: 'center',
      marginTop: '20px'
    },
    primaryButton: {
      padding: '12px 24px',
      fontSize: '16px',
      fontWeight: '600',
      color: '#ffffff',
      backgroundColor: '#0ea5e9',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'background-color 0.2s',
      flex: 1
    },
    secondaryButton: {
      padding: '12px 24px',
      fontSize: '16px',
      fontWeight: '600',
      color: '#0284c7',
      backgroundColor: '#bae6fd',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'background-color 0.2s',
      flex: 1
    },
    watermark: {
      marginTop: '40px',
      color: '#0284c7',
      fontSize: '15px',
      fontWeight: '600',
      opacity: 0.7,
      letterSpacing: '0.5px'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Counter App</h2>
        
        <div style={styles.countDisplay}>{count}</div>
        
        <div style={styles.buttonContainer}>
          <button 
            style={styles.primaryButton} 
            onClick={handleDecrement}
            onMouseOver={(e) => e.target.style.backgroundColor = '#0284c7'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#0ea5e9'}
          >
            - Decrement
          </button>
          
          <button 
            style={styles.secondaryButton} 
            onClick={handleReset}
            onMouseOver={(e) => e.target.style.backgroundColor = '#7dd3fc'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#bae6fd'}
          >
            Reset
          </button>
          
          <button 
            style={styles.primaryButton} 
            onClick={handleIncrement}
            onMouseOver={(e) => e.target.style.backgroundColor = '#0284c7'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#0ea5e9'}
          >
            + Increment
          </button>
        </div>

        <div style={styles.watermark}>
          Name: OM GARGOTE | PRN: 1272250453
        </div>
      </div>

      
    </div>
  );
};

export default CounterApp;