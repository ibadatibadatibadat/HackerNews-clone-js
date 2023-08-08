axios
  .get("https://api.hnpwa.com/v0/newest/1.json")
  .then(function (response) {
    CreateList(response);
  })
  .catch(function (error) {
    console.log(error);
  });

//creating a list item
//adding to the DOM

function CreateList(response) {
  response.data.forEach(function (listItem) {
    //creating a list item
    let li = document.createElement("li");
    li.setAttribute("class", "list-group-item");
    // li.innerHTML = listItem.title;

    //creating Badge
    let span = document.createElement("span");
    span.setAttribute("class", "badge badge-primary");
    span.innerHTML = listItem.points;
    // li.appendChild(span);
    // li.appendChild(anchor);

    //creating an anchor tag
    let anchor = document.createElement("a");
    anchor.setAttribute("href", listItem.url);
    anchor.setAttribute("target", "_blank");
    anchor.innerHTML = listItem.title;
    anchor.prepend(span);
    li.appendChild(anchor);

    document.querySelector(".list-group").appendChild(li);
  });
}
