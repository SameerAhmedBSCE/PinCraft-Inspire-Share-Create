var arr = [
    {name: "Petals of roses", image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?q=80&w=3786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Animals of town", image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2688&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name: "the crowd of city", image: "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?q=80&w=3872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name: "fruits of planet", image: "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?q=80&w=3764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name: "orange peeled", image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=3337&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "web design", image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "apple juice", image: "https://images.unsplash.com/photo-1576673442511-7e39b6545c87?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "water during sunset", image: "https://images.unsplash.com/photo-1536782376847-5c9d14d97cc0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlZXxlbnwwfHwwfHx8MA%3D%3D"},
    {name: "tree surrounded by grass", image: "https://images.unsplash.com/photo-1501183007986-d0d080b147f9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZXxlbnwwfHwwfHx8MA%3D%3D"},
    {name: "parrot", image: "https://images.unsplash.com/photo-1430990480609-2bf7c02a6b1a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZnJlZXxlbnwwfHwwfHx8MA%3D%3D"},
    {name: "bonfire", image: "https://images.unsplash.com/photo-1453060590797-2d5f419b54cb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZyZWV8ZW58MHx8MHx8fDA%3D"},
    {name: "trees and green grass", image: "https://images.unsplash.com/photo-1418489098061-ce87b5dc3aee?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGZyZWV8ZW58MHx8MHx8fDA%3D"},
    {name: "kiwi", image: "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJ1aXRzfGVufDB8fDB8fHww"},
    {name: "promegranate", image: "https://images.unsplash.com/photo-1546548970-71785318a17b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJ1aXRzfGVufDB8fDB8fHww"},
    {name: "berries", image: "https://images.unsplash.com/photo-1596591606975-97ee5cef3a1e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZydWl0c3xlbnwwfHwwfHx8MA%3D%3D"},
    {name: "eagle", image: "https://plus.unsplash.com/premium_photo-1661823662989-9d441b95d906?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmlyZHMlMjBmbHlpbmd8ZW58MHx8MHx8fDA%3D"},
    {name: "bird flying", image: "https://images.unsplash.com/photo-1596117803277-6142bb2ae8ef?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJpcmRzJTIwZmx5aW5nfGVufDB8fDB8fHww"},
    {name: "", image: ""}
];

function showTheCards() {
    var clutter = "";
    arr.forEach(function(obj) {
        clutter += `<div class="box">
            <img class="cursor-pointer" src="${obj.image}" alt="${obj.name}">
            <div class="caption">${obj.name}</div>
        </div>`;
    });
    document.querySelector(".container").innerHTML = clutter;
}

function handleSearchFunctionality() {
    var input = document.querySelector("#searchinput");
    input.addEventListener("input", function () {
        const searchTerm = input.value.toLowerCase();
        const filteredArray = arr.filter(obj => obj.name.toLowerCase().includes(searchTerm));
        var clutter = "";
        filteredArray.forEach(function (obj) {
            clutter += `<div class="box">
                <img class="cursor-pointer" src="${obj.image}" alt="${obj.name}">
                <div class="caption">${obj.name}</div>
            </div>`;
        });
        document.querySelector(".container").innerHTML = clutter;
        document.querySelector(".searchdata").style.display = "block";
     
    });
}




handleSearchFunctionality();
showTheCards();
