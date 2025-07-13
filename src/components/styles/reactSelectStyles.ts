
const customSelectStyles = {
  control: (base: any, state: any) => ({
    ...base,
    backgroundColor: '#ffffffea',
    borderColor: state.isFocused ? '#7c3aed' : '#c7c9df',
    boxShadow: state.isFocused ? '0 0 0 3px rgba(124, 58, 237, 0.25)' : 'none',
    borderRadius: '0.45rem',
    padding: '2px',
    fontSize: '0.95rem',
    ':hover': {
      borderColor: '#7c3aed',
    },
  }),
  menu: (base: any) => ({
    ...base,
    backgroundColor: '#f9fafb',
    borderRadius: '0.45rem',
    boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
    padding: '0.25rem',
    zIndex: 1000,
  }),
  option: (base: any, state: any) => ({
    ...base,
    backgroundColor: state.isSelected
      ? '#6366f1'
      : state.isFocused
      ? '#e0e7ff'
      : 'transparent',
    color: state.isSelected ? 'white' : '#1f2937',
    fontWeight: 500,
    padding: '0.5rem 1rem',
    borderRadius: '0.35rem',
    cursor: 'pointer',
  }),
  singleValue: (base: any) => ({
    ...base,
    color: '#1f2937',
    fontWeight: 500,
  }),
};

export default customSelectStyles;
