export const stateStats = (state, mockData) => {
    const stateStats = mockData.find((data) => data.state.includes(state));

    return stateStats;
};