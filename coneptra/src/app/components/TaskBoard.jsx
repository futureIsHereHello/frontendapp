import React from 'react';

const styles = {
  TaskBoard: {
    position: 'fixed',
    top: '100px',
    right: '50px',
    width: '400px',
    height: '600px',
    backgroundColor: '#ffffff',
    borderRadius: '24px',
    boxShadow: '0 10px 15px rgba(0,0,0,0.1)',
    padding: '16px',
    zIndex: 20,
    overflowY: 'auto',
  },
  Heading: {
    color: '#000000',
    fontSize: '16px',
    fontWeight: 700,
    marginBottom: '16px',
  },
  TaskItem: {
    padding: '8px',
    borderBottom: '1px solid #f0f0f0',
    color: '#000000',
  },
};

const TaskBoard = () => {
  const tasks = [
    { id: 1, name: 'Design meeting with team' },
    { id: 2, name: 'Review pull requests' },
    { id: 3, name: 'Update project documentation' },
  ];

  return (
    <div style={styles.TaskBoard}>
      <div style={styles.Heading}>Task Board</div>
      {tasks.map((task) => (
        <div key={task.id} style={styles.TaskItem}>{task.name}</div>
      ))}
    </div>
  );
};

export default TaskBoard;
