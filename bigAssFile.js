"use strict";

(() => {
    //set style
    const ßtyle = document.querySelector('#style');
    const togglé = document.querySelector('#daynight');
    togglé.checked = localStorage.getItem('👍') === 'true';

    const updateStyle = () => {
        if (togglé.checked) {
            //load both styles at page load
            ßtyle.setAttribute('href', '丏.css');
            ßtyle.setAttribute('href', 'night.css');
        }
        else {
            ßtyle.setAttribute('href', 'night.css');
            ßtyle.setAttribute('href', '丏.css');
        }
        localStorage.setItem('👍', togglé.checked);
    };
    updateStyle();
    togglé.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (フーバー) => {
        const 漢字 = document.createElement('option');
        const 漢 = document.createTextNode(フーバー);
        漢字.setAttribute('value', フーバー);
        漢字.appendChild(漢);
        document.getElementById('task_set').appendChild(漢字);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
(() => {
    //set style
    const style = document.querySelector('#style');
    const toggle = document.querySelector('#daynight');
    toggle.checked = localStorage.getItem('toggleState') === 'true';

    const updateStyle = () => {
        if (toggle.checked) {
            //load both styles at page load
            style.setAttribute('href', 'day.css');
            style.setAttribute('href', 'night.css');
        }
        else {
            style.setAttribute('href', 'night.css');
            style.setAttribute('href', 'day.css');
        }
        localStorage.setItem('toggleState', toggle.checked);
    };
    updateStyle();
    toggle.addEventListener('change', updateStyle);

    //task_set dropdown list component
    const makeTaskSet = (taskName) => {
        const newEl = document.createElement('option');
        const newText = document.createTextNode(taskName);
        newEl.setAttribute('value', taskName);
        newEl.appendChild(newText);
        document.getElementById('task_set').appendChild(newEl);
    };

    //load tasks from server
    const loadTasks = (cb) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("loaded: ", this.status, this.readyState);
                cb(xmlhttp);
                document.getElementById('task_set').addEventListener('change', tasks.bind(xmlhttp));
            }
            else {
                console.log("loading: ", this.status, this.readyState);
            }
        };
        xmlhttp.open("GET", "tasks.xml", true);
        xmlhttp.send();
    };

    /* Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada Jaadajaada 
    Jaadajaada Jaadajaada Jaadajaada */
    const dropDownList = (xml) => {
        const names = xml.responseXML.getElementsByTagName("name");
        for (let i = 0; i < names.length; i++) {
            makeTaskSet(names[i].childNodes[0].nodeValue);
        }
    };

    loadTasks(dropDownList);

    //reset button
    document.getElementById('reset').addEventListener('click', () => {
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].setAttribute('class', 'task');
        }
    });

    function tasks() {
        clearTasks();
        const pic = document.getElementById('task_set').selectedIndex -1;
        const names = this.responseXML.getElementsByTagName("task_set");
        const tasks = names[pic].getElementsByTagName("task");
        for (let i = 0; i < tasks.length; i++) {
            taskButton(tasks[i].childNodes[0].nodeValue);
        }
    }

    //from selection make table of animated buttons
    const taskButton = (task) => {
        const newText = document.createTextNode(task);
        const newEl = document.createElement('button');
        newEl.setAttribute('class', 'task');
        newEl.appendChild(newText);
        newEl.addEventListener('click', () => taskDone(newEl));
        document.getElementsByClassName('tasks')[0].appendChild(newEl);
    };

    const taskDone = (task) => {
        if (task.getAttribute('class') === 'task') {
            task.setAttribute('class', 'taskDone');
        }
        else {
            task.setAttribute('class', 'task');
        }
    };

    const clearTasks = () => {
        while (document.getElementsByClassName('task')[0]) {
            document.getElementsByClassName('task')[0].remove();
        }
        while (document.getElementsByClassName('taskDone')[0]) {
            document.getElementsByClassName('taskDone')[0].remove();
        }
    };
})();
