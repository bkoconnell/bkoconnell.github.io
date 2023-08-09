/*
function refresh() {
    // Force browser to load from server instead of cache. Borrowed from https://stackoverflow.com/a/70901317
    const url = new URL(window.location.href);
    url.searchParams.set('reloadTime', Date.now().toString());
    window.location.href = url.toString();
}

const navigationLastEntry = performance.getEntriesByType('navigation').pop();

// Execute when entry type is 'navigate' (partially borrowed from https://gist.github.com/adrienv1520/7e4bacc44849b7daa5ce323bcc800272)
if (navigationLastEntry
    && navigationLastEntry.type === 'navigate') {
        refresh();
        // calling reload() will change entry type to 'reload', preventing infinite loop.
        window.location.reload();
    }
*/