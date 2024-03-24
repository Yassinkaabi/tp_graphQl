// taskResolver.js
let tasks = [
    {
        id: '1',
        title: 'Développement Front-end pour Site E-commerce',
        description: 'Créer une interface utilisateur réactive en utilisant React etRedux pour un site e- commerce.',
        completed: false,
        duration: 11,
    },
    {
        id: '2',
        title: 'Développement Back-end pour Authentification Utilisateur',
        description: 'Implémenter un système authentification et autorisation pour uneapplication web en utilisant Node.js, Express, et Passport.js',
        completed: false,
        duration: 11,
    },
    {
        id: '3',
        title: 'Tests et Assurance Qualité pour Application Web',
        description: 'Développer et exécuter des plans de test et des cas de testcomplets.',
        completed: false,
        duration: 11
    }
];
const taskResolver = {
    task: ({ id }) => tasks.find(task => task.id === id),
    tasks: () => tasks,
    addTask: ({ title, description, completed, duration }) => {
        const task = {
            id: String(tasks.length + 1),
            title,
            description,
            completed,
            duration,
        };
        tasks.push(task);
        return task;
    },
    completeTask: ({ id }) => {
        const taskIndex = tasks.findIndex(task => task.id === id);
        if (taskIndex !== -1) {
            tasks[taskIndex].completed = true;
            return tasks[taskIndex];
        }
        return null;
    },

    changeDescription: ({ id, newDescription }) => {
        const taskIndex = tasks.findIndex(task => task.id === id);
        if (taskIndex !== -1) {
            tasks[taskIndex].description = newDescription;
            return tasks[taskIndex];
        }
        console.log("Tâche non trouvée");
    },

    deleteTask: ({ id }) => {
        const taskIndex = tasks.findIndex(task => task.id === id);
        if (taskIndex !== -1) {
            const deletedTask = tasks.splice(taskIndex, 1)[0];
            return deletedTask;
        }
        console.log("Tâche non trouvée");
    },
};
module.exports = taskResolver;