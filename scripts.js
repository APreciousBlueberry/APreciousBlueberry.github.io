const iframeStr = `<iframe width="560" height="315" frameborder="0" allowfullscreen></iframe>`;

const movieDialogStr = `
    <dialog id="movie-dialog">
        <div class="movie-dialog__close">
            <button
                onClick="
                    document.querySelector('#movie-dialog').close();
                    document.querySelector('#movie-dialog iframe').remove();
                "
                title="Close"
            >❌</button>
        </div>
    </dialog>
`;

function showMovieDialog(movieUrl) {
    if (! document.querySelector("#movie-dialog")) {
        document.body.insertAdjacentHTML("beforeend", movieDialogStr);
    }
    document.querySelector("#movie-dialog").insertAdjacentHTML("beforeend", iframeStr);
    document.querySelector("#movie-dialog iframe").src = movieUrl;
    document.querySelector("#movie-dialog").showModal();
}
