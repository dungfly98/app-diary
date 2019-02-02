const configdays = (days) => {
    switch(days) {
        case 0: 
            return 'Sun';
        case 1: 
            return 'Mon';
        case 2: 
            return 'Tue';
        case 3: 
            return 'Web';
        case 4: 
            return 'Thu';
        case 5: 
            return 'Fri';
        case 6: 
            return 'Sat';

    }
}

export { configdays }