let {signal, component} = reef;

// Create a reactive data store
let data = signal({
	//Insert variables here
    contentDisplay: `hidden`,
    loaderDisplay: `flexbox`,
});

// Create a template function
function template () {
	return `
        <!--Main content-->
        <div id="page-content" class="${data.contentDisplay}">
            <!-- Header -->
            <header class="header">
                <h1>Header</h1>
            </header>
            <!-- Main Content -->
            <main class="main secondary-bg">
                <!-- Add content here -->
            </main>
        </div>

        <!--Loading Screen-->
        <div id="loading-screen" class="${data.loaderDisplay}">
            <div id="loader-wrapper" class="${data.loaderDisplay}">
                <div id="outer-loader" class="${data.loaderDisplay}">
                    <div id="middle-loader" class="${data.loaderDisplay}">
                        <div id="inner-loader" class="${data.loaderDisplay}"></div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Create a component
// Renders into the UI, and updates whenever the data changes
component('#app', template);