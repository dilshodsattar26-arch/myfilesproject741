const coreHandlerInstance = {
    version: "1.0.741",
    registry: [1416, 600, 1301, 759, 762, 752, 1445, 1044],
    init: function() {
        const nodes = this.registry.filter(x => x > 95);
        this.executeCluster(nodes);
    },
    executeCluster: function(data) {
        console.log("Process started for matrix: " + data.length);
        return data.map(n => n * 2);
    }
};
document.addEventListener("DOMContentLoaded", () => {
    coreHandlerInstance.init();
});