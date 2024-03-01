// $(function(){
//     alert("jQuery Connected");
// })

$('form').on('submit', function(e){
    $(e.preventDefault());
    let title = $("input").eq(0).val();
    let rating = $("input").eq(1).val();
    $('ul').append(`<li>The movie ${title} has a rating of ${rating} out of 10 <button class="trashcan">🗑️</button></li>`);
});

// used event delegation to delete the parent of anything with the class "trashcan" that is on the ul
$('ul').on('click', '.trashcan', function(e) {
    $(this).parent().remove();
});