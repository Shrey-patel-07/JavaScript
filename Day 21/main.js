// -------------------------------Exercise: Level 1---------------------------------------

/*
1. Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name
2. Get each of the the paragraph using document.querySelector('#id') and by their id
3. Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
4. Loop through the nodeList and get the text content of each paragraph
5. Set a text content to paragraph the fourth paragraph,Fourth Paragraph
6. Set id and class attribute for all the paragraphs using different attribute setting methods
*/

const paragraph_one = document.querySelector("p");
const paragraph_two = document.querySelector("#second-p");
const paragraph_three = document.querySelector("#third-p");
const paragraphs = document.querySelectorAll("p");

paragraphs.forEach((text) => console.log(text.textContent));

paragraphs[3].textContent = "Fourth Paragraph";

paragraph_one.id = "first";
paragraph_one.className = "paragraph";

paragraph_two.id = "fourth";
paragraph_two.setAttribute("class", "paragraph");

paragraph_three.setAttribute("id", "third");
paragraph_three.setAttribute("class", "paragraph");

paragraphs[3].id = "fourth";
paragraphs[3].classList.add("paragraph");

// -------------------------------Exercise: Level 2---------------------------------------
/*
1. Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
2. Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color
3. Set text content, id and class to each paragraph
*/

const all_paragraphs = document.querySelectorAll("p");
all_paragraphs.forEach((paragraph) => {
  paragraph.style.color = "red";
  paragraph.style.backgroundColor = "lightblue";
  paragraph.style.border = "2px solid black";
  paragraph.style.fontSize = "30px";
  paragraph.style.fontFamily = "Roboto";
});

for (let i = 0; i < all_paragraphs.length; i++) {
  if (i % 2 == 0) {
    all_paragraphs[i].style.color = "green";
  } else {
    all_paragraphs[i].style.color = "red";
  }
}

all_paragraphs[0].textContent = "Updated Paragraph";
all_paragraphs[0].id = "updated_first";
all_paragraphs[0].class = "updated_paragraph";

all_paragraphs[1].textContent = "Updated Paragraph";
all_paragraphs[1].id = "updated_second";
all_paragraphs[1].class = "updated_paragraph";

all_paragraphs[2].textContent = "Updated Paragraph";
all_paragraphs[2].id = "updated_third";
all_paragraphs[2].class = "updated_paragraph";

all_paragraphs[3].textContent = "Updated Paragraph";
all_paragraphs[3].id = "updated_fourth";
all_paragraphs[3].class = "updated_paragraph";
