export const setTinyEditorContent = (id, value) => {
    if (!(id && value)) return
    tinyMCE.get(id).setContent(value);
}

const addTinyMce = (initialValue) => {

    if (tinyMCE.EditorManager.activeEditor !== null) {
        tinyMCE.remove()
    }

    window.tinyMCE.init({
        selector: "#issue",
        promotion: false,
        // theme: "silver",
        // content_css: "visual/css/mce.css",
        // plugins: " code, wordcount, image, table, template, save, lists, advlist",
        plugins: 'preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount charmap quickbars emoticons accordion',
        toolbar: 'undo redo styles | strikethrough bold italic underline | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent',
        advlist_bullet_styles: "square",
        table_use_colgroups: true,
        // toolbar: "source, template, table, hr, numlist, bullist, image, save",
        branding: false,
        placeholder: 'Type here...',
        // menubar: "insert,edit",
        paste_data_images: true,
        readonly: true,
        skin: 'codefend',
        content_css: 'codefend',
        // content_css: 'tinymce-5-dark',
        image_caption: true,
        //images_upload_url: 'upload_processor.php',
        automatic_uploads: true,
        height: "calc(100vh - 161px)",
        templates: [{
            title: 'Issue A',
            description: 'simple issue, code, no media',
            url: '/editor/visual/mce/models/01.html'
        },
        {
            title: 'Issue B',
            description: 'simple issue, code, no media',
            url: '/editor/visual/mce/models/02.html'
        },
        ],

    });
    setTimeout(() => {
        setTinyEditorContent('issue', initialValue);
    }, 300)


}



export const getTinyEditorContent = (id) => {
    if (!id) return ''
    return tinyMCE.get(id).getContent();

}

export const setMode = (id, mode) => {
    const editorHeader = document.querySelector('.tox-editor-header');
    if (editorHeader != null) {
        (mode == 'design') ? editorHeader.classList.add('editable') : editorHeader.classList.remove('editable');
    }
    return tinyMCE.get(id).mode.set(mode);
}




export default addTinyMce

