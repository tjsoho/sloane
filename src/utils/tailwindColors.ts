// src/utils/tailwindColors.ts
export const tailwindColors = {
    'brand-cream': '#FFE7C3',
    'brand-logo': '#C1FF72',
    'brand-green': '#00BF63',
    'brand-green-light': '#7ED957',
    'brand-green-dark': '#004B27',
    'brand-orange': '#FF914D',
    'brand-orange-light': '#FFBD59',
    'brand-orange-dark': '#572700',
    'brand-yellow': '#FFD874',
  };
  
export const getTailwindColor = (colorName: string) => {
    const tailwindColors: { [key: string]: string } = {
        'brand-cream': '#FFE7C3',
        'brand-logo': '#C1FF72',
        'brand-green': '#00BF63',
        'brand-green-light': '#7ED957',
        'brand-green-dark': '#004B27',
        'brand-orange': '#FF914D',
        'brand-orange-light': '#FFBD59',
        'brand-orange-dark': '#572700',
        'brand-yellow': '#FFD874',
    };
    return tailwindColors[colorName] || colorName;
};
  