const movieDialogStr = `
    <dialog id="movie-dialog">
        <a
            href="#"
            onClick="
                event.preventDefault();
                document.querySelector('#movie-dialog').close();
                document.querySelector('#movie-dialog iframe').src = '';
            "
            style="display:block; position: relative; top: -10px;"
            title="Close"
        >❌</a>
        <iframe width="560" height="315" src="" frameborder="0" allowfullscreen></iframe>
    </dialog>
`;

function showMovieDialog(event, whereDaMovie) {
    event.preventDefault();
    if (! document.querySelector("#movie-dialog")) {
        document.body.insertAdjacentHTML("beforeend", movieDialogStr);
    }
    document.querySelector("#movie-dialog iframe").src = whereDaMovie;
    document.querySelector("#movie-dialog").showModal();
}
