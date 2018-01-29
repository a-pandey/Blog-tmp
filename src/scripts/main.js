(function($){

    var elementsWithHash = $('a[href="#"]');
    elementsWithHash.on('click', function(e){
        e.preventDefault();
    });

    $('head').append('<script src="/blog/article-entry.js"></script>');

    var collapseButton = document.getElementById('collapse-btn');
    var mainNav = document.getElementsByClassName("main-nav")[0];

    collapseButton.addEventListener('click', function (e) {
        e.preventDefault();
        mainNav.classList.toggle('toggle-nav');
    });

    var footerDate = document.getElementsByClassName('footer-date')[0];
    var currentYear = new Date().getFullYear();
    footerDate.textContent = currentYear;


    var blogPosts = $('.posts .list');
    var recentPostList = $('.recent-posts ul');
    var archiveTable = $('#article-archive-table');

    $.each(articleListData, function(index, article){

        var htmlChunck = '<li class="post">';
        htmlChunck += '<h3 class="heading">';
        htmlChunck += article['heading'];
        htmlChunck += '</h3><div class="description">';
        htmlChunck += article['description'];
        htmlChunck += '</div><a class="read-btn" href="/blog/posts/'+article['link']+'">Read More</a>';
        htmlChunck += '</li>';

        var entry = '<tr>';
        entry += '<td><a href="/blog/posts/' + article['link'] + '">' + article['heading'] + '</a></td>';
        entry += '<td>' + article['date'] + '</td>';

        archiveTable.append(entry);

        blogPosts.append(htmlChunck);
    })

    var recentPosts = '';
    for(var i=0; i<articleListData.length && i<3; i++){
         recentPosts += '<li><a href="/blog/posts/'+articleListData[i]['link']+'">';
         recentPosts += articleListData[i]['heading']+'</a></li>';
    }
    recentPostList.append(recentPosts);

    var portfolioTab = $('.portfolio nav .nav-item');
    portfolioTab.on('click', function(e){
       e.preventDefault();
       var content = $(this).attr('href');
        $('.portfolio nav .nav-item').removeClass('selected')
       $('.portfolio .content').load(content);
       $(this).addClass('selected');
    });

    $('.content').load('development.html');

    //
    
    var currentURL = window.location.href;
    var articleTitle = $('#article-title').text()
    var tweet = 'https://twitter.com/intent/tweet?url='+currentURL;
    tweet += '&text='+articleTitle;
    tweet += '&via=amritpandeyy';
    $('#twitter-share').attr('href', tweet);

    var fbPost = 'https://www.facebook.com/sharer/sharer.php?u=';
    fbPost += currentURL;
    $('#facebook-share').attr('href', fbPost);
    
    // $('#latest-article').load('/blog/posts/' + articleListData[0]['link'] + 'index.html #article *');
    // var imgPath = $('#latest-article img').attr('src');
    // $('#latest-article img').attr('src', '/blog/posts/' + articleListData[0]['link'] + imgPath)

    var tweetMsgBox = $('#tweet-msg');
    tweetMsgBox.on('change', function(){
        $('#send-tweet').attr('href',
        'https://twitter.com/intent/tweet?text=@amritpandeyy '+$(this).val());
    })

    // if ('serviceWorker' in navigator) {
    //     navigator.serviceWorker.register('/sw.js')
    //     .then(function(registration) {
    //       console.log('Registration successful, scope is:', registration.scope);
    //     })
    //     .catch(function(error) {
    //       console.log('Service worker registration failed, error:', error);
    //     });
    // }
})(jQuery);