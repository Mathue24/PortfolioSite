window.onload = function ()
    {
        var footer = document.getElementByID('footer');
        footer.innerHTML = "<div class=\"footer bg-secondary text-white\"><p>© <script>document.write(/\d{4}/.exec(Date())[0])</script> Martin Messerschmidt</p></div>";
    }