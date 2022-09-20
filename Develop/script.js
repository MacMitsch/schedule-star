$(document.ready(() => {
    $("#todaysDate").text(moment().format());
    
    $(".saveBtn").on("click", () => {
        console.log(this);

        const description =$(this).siblings(".description").val();
        const time =$(this).parent().attr("id");
        // adds consts above to local storage
        localStorage.setItem(description,time);
    })


}));