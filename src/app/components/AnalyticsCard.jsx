import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const styles = {
  Card: {
    position: 'relative',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(to right, #ff758c, #ff7eb3)',
    borderRadius: '25px',
    padding: '20px',
    // color: '#ffffff',
    // fontFamily: 'Poppins, sans-serif',
    boxSizing: 'border-box',
  },
  Header: {
    fontSize: '48px',
    fontWeight: 500,
    lineHeight: '68px',
    marginBottom: '20px',
  },
  Chart: {
    width: '100%',
    height: '150px',
    marginBottom: '20px',
  },
  Percentages: {
    display: 'flex',
    justifyContent: 'space-around',
    fontSize: '22px',
    fontWeight: 600,
    lineHeight: '32px',
  },
  Percentage: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100px',
    height: '60px',
    borderRadius: '15px',
    backgroundColor: 'rgba(233, 233, 233, 0.10)',
    // backgroundColor: 'linear-gradient(to right, #ff758c, #ff7eb3)',

  }
};


const defaultProps = {
    mainText: '23.0000K',
    percentages: ['% 20', '% 50', '% 30'],
  };
  
  const AnalyticsCard = (props) => {
    const { mainText, percentages } = { ...defaultProps, ...props };
  
    const data = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      datasets: [
        {
          label: 'Dataset 1',
          data: [65, 59, 80, 81, 56, 55, 40],
          borderColor: '#ffffff',
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          fill: false,
          tension: 0.4,
          pointRadius: 3,
          pointBackgroundColor: '#ffffff',
        },
      ],
    };
  
    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: false,
        },
      },
      scales: {
        x: {
          ticks: { color: '#ffffff' },
          grid: { display: false }
        },
        y: {
          ticks: { color: '#ffffff' },
          grid: { color: 'rgba(255, 255, 255, 0.3)' }
        },
      },
    };
  
    return (
      <div style={styles.Card}>
        <div style={styles.Header}>{mainText}</div>
        <div style={styles.Chart}>
          <Line data={data} options={options} />
        </div>
        <div style={styles.Percentages}>
          {percentages.map((text, index) => (
            <div key={index} style={styles.Percentage}>{text}</div>
          ))}
        </div>
      </div>
    );
  };
  
  export default AnalyticsCard;