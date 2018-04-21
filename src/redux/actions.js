export const initAction = (workouts) => ({
    type: 'INIT_WORKOUTS',
    workouts
   });
   
export const addWorkout = (workout) =>({
    type: 'ADD_WORKOUT',
    workout
});