import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the url of the image that will used as background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "left", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: null,
        linkedin: null,
        instagram: null,

        name: null,
        lastname: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables); //print on the console
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${variables.name == null ? "Write your name" : variables.name} ${
    variables.lastname == null ? "and lastname" : variables.lastname
  }</h1>
          <h2>${
            variables.role == null ? "Select your rol" : variables.role
          }</h2>
          <h3>${
            variables.city == null ? "Select your city" : variables.city
          }, ${
    variables.country == null ? "Select your country" : variables.country
  } </h3>
          <ul class="${variables.socialMediaPosition}">
            <li><a href="${
              variables.twitter
            }"><i class="fab fa-twitter"></i></a></li>
            <li><a href="${
              variables.github
            }"><i class="fab fa-github"></i></a></li>
            <li><a href="${
              variables.linkedin
            }"><i class="fab fa-linkedin"></i></a></li>
            <li><a href="${
              variables.instagram
            }"><i class="fab fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should
    includeCover: true,
    // this is the url of the image that will used as background for the profile cover
    background:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgVFRUYEhgSHBIYGBgSEhIRERISGBgZGRgUGBgcIy4lHB4rHxgYJjgmKy8xNTU1GiQ7QDszPy40NTQBDAwMEA8QHhISHjErISs0NDQ0NDQ0NDQ0NDQ0NDE0NDQ0NDQ0NjY1NDQ0NDQ0NDY0NDE0NDQ0NDE0NDQ3MTQ0NP/AABEIAKEBOAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAACAwABBAUGB//EAEAQAAICAQIEBAQDBAgEBwAAAAECABEDEiEEMUFRBRMiYTJxgZEUobEVQlLwBmJzgrLB0fEjMzRyU3SSs7TD4f/EABgBAQEBAQEAAAAAAAAAAAAAAAEAAgME/8QAJBEBAQACAgICAgIDAAAAAAAAAQACERIhMUEDURNhIkIykaH/2gAMAwEAAhEDEQA/APlZkEYqxgwT06vOsmSG2MwCINeayYIlyqmVkLTgS5vXhQZzEciPTimE4Z45PhtiT8nCe8BeEim4tpF4siZ456nZMyYDfOJXAzE+0HJxBMmLiSs2GQRsjbhGrkYp8JE1N4iaA7RGbitRPvLFz32U6s5lVKJlgzuasO6ESaTJqjlygdIgPuFT1JIMGaHygjlE6oIHujJfVUgJjQ4qEWHT9Jox/cOX6kqxlEdYbGuUobj5mZfq1i+6DJ8W16hXy36faPzce76QwX0X8KhSxICksRzNACAiEBvTZGxvfSO8vEmljrUNS6gpJANgaSSpvqDMoKL6rZ3Fi40qFGlDpIskNqZaYaWo8qduVHlvtD/H8iUW1ZXSiwCaQg01fqGlFG/vDbh10ghCDpJBtjrvE77A9FIUbfWO/DIWXFpKk5siF9RLAIEsVXPciMkp/EhuFTSCHAHmFq1Ubut9xf1g5vEdTajrNsrU+TWFILEqmw0ruKG/KVnxYgrMtkEqqBWOlSULEksoLCwO2xiUwbPqBDoAQthGqiWYhtzVDYb730gS+YNa0LB2UjmK1b6T8oAM0Z8KoSAQ9BgfhNMDzFcv1gPhAr1dLNUaO235zQ6jqVcqMXHdUehJvapWgDn+UlWOpquoShz36RZeCE6ytMxxndGMkEiXU1WqxJKAklWrXh5zoYFGlrnNUVGLkM2NzS6GRV0D6zm5FFiF5pisjyaDuGt4QWKJkVpyRuluw8MDNS+G9Zn4YHY3NGTiWXrz/KefMz3/ABtmrLm4WpjdY7iM5MzFrnbAyDuy0qTTBEsmdTVhH1FplFZA0rVHqtZRBILJUJXqRnl/HVHLcFS9Mlyw0DVO6tMmmEHgs1xeNCtRE2cJ4a+RC6VpUqps0bNV+syAzbwfFBVZSWAJB9LUNvbrygSrFxfg+XG4R1oldQogiqJ5/SZGwOqhypCsSFaqBI51O7j8WTI6ea7oEQpY9R5Hb5bzPxvG434bFi1lnxu5BCkBMZA2Pc/6SQoW4u/vvHY+FdnCBGDGtirCh/Edth7zVwWVFUlnIZSaXQTqBK730qjNvC+Jgks2YowFkkOxyKDkrHYB/iTnt9p58/kyN6PF0AuVwiOzIqsUJDFCzsgGxJ0HpdEbdYpeIcDZ3ALBviYA5BuHPdhY357zuZ+PRnwepAiXRHm6sV41SnDWFAIGy7bEw/xSjFixo2P0BhYdiyZgmYa9NUFLMG1dfT22yfNl1s8/8kxPu89l4gtepi17mzZJAq/ttG5c7hnDE6mJDggaiwsEe3UbTs8XnCo4GQatSsBrGpXV1Fqlfwrd/wBYiHm4pT52oo5fM2pvNwj/AIR0eUyiiWr1H0kUb1RflyPVcR3cXikyI9ZFKNXJlAJU2LPfrud4nzD7cq5Dce86nGFC+ZmGNCDrQY2GQPqLrYOpt/UGIv8Ad5CBxboGIVFAqgSUa13php5Hl7zWPyOjqHEuaHkLGab1cwNkAFbbjqfeZp0xy3ZSsOaqDcfwhAbcA/OaHRGqhXK5vW7KhYLlho3iMYB2PeRMY6mZXUncvVLhHGLkhyrU0SVFlpRedbnE8AwSZUzaCsxmNRtFSwZTd7hMa0Pf8owcMrWL7/pOGmcjrLHFNzua6saZ3F4ADtMyJvI+YmLDQdWgZ74wJnIllzBuDQNo4fDqNTbj8MLXXScxXImzBx7KNjOGeOf9W6Gvc7J4YVr3isXBarr2/WHn8RLADt+cyDiWF0auZxPkce/NOrRxXChDXbnF4eEL8ovJnZtzvLw8Uy7Cb45GP7jrc9/DiDX1mXJi0neNPHvYN7jl7dYl8pbnHHl/an9QUJNMoGXq6Tr17so+qVLGPl7wdUYuTuOUTj7h5HiHyz9zXzh+Sd7I2BPz2J2grkr7g/aX5o3253VsdrFfWX8a/lHjxKWoG/TkPPkyq7D/AAj7y/D8bM6hX8s+ohr0kAA3R71f5xWHJps8yVdR7FgVJP0LfWo3HxIVkYIBoUq1NRyE6ra62NNXX4RMPY6t49PcaeHu9MNLa2IsuP69uxPJPQ51H+EycR4bkRWZwAqEBqdCSDp9Si/UvrUWNrM0cHxy+lCoAIKMz5NKnHpyqBek6WrIfVRFqNgLmjxTisbI+mr1eWlOSxxBleypXl6dmvextPPlnmZhrq2Am7m5OCbU+gFlRitkqCd65XvzF1yuLyYlGoBtWmv3aBN0ZqfxHZgutNTl6DgqS2nUrbbi12+e8zPkXU1A03QkEg3fPtOmLn7h16gbCw5joD9DyglCOe01ZuLDXsQKAAsbRGXJf2AmsVfJZZcgJkUy9U6dWXdRuTeXqk1S0Tt+qAySrkhMZgyyZU0tgKSxKhSKaSQbklsrTEBIRIFlES5EcXdAIekRcu5CUjQiSpUq5bJ0xkQJDIILIajCwSJVyXCrv+DY8fq1kfCNjzsnmI3jPDkIJQqaK9a2JnnRkIjF4hh1mtxpup4r4WEXUOZ6bH095zuGRTsRAycQ52JP3MWpPSZyN+Jxurj8OU6efqAPyu4HF8CqKGF3qA35cgZgGZ+5jcnFsUCHld3W/bnPPwz2O+rpstODhEZXdyVqtIA5kn9I/i/KJVCdYxqxPlqENdFvr85yRmaq1GjF6j35x/Fk5bWt3WXgcRRKc68lELd7NqAXl3A3vrEpwY1Pjshg2BL2IDM2l9qvZux6TOcmRUT1MFB1JvVMP3h1EpONdVZQ7AZDqcA/G3PUTzuHDM33Wy7P7ExZGPkvqXGV8z16tKlnDaSUX1aVL8qG/OoXiHD42Yl1XGuNsyWgXHrRGwquogbkF33regJx8nHZW1Mzu2oAMb2IIdADXs7j+8YzFxufI+oZCz6WGpmRVXGvqay1KosX8/eZx+L5DLa7C1vH6n4uCRWwklmGV8SrWkWBQdtwQRqZaBHKxE8PwyN5YZmVsuty1qqLjQuCKq9R0HfkLGxmXDxzqUZXKnHq0Hb0aiS1X3JMbj4zKzKqszNrLKq1fmNdkAd7O3Lczbjn6YE923Jw+PQVRgxLWp0W+nUgvXtYFkVW/OYSiBNw2q032ACkWRUo8ZkK/GdOrVzAGvndD/aKfMzEksSWom+pHKOGGR5YUZxwqS1WBe179Osp8AAJBuvaKORtxZ35wdR7zZi/cUqSVJNxWol6INywZR3WFlwQZJVWZUMpJpjyI1VJIZWmTkUFUagi9MsbTL3NrVRFNUUXgmZMWtxNAlSVNkRyQZU1uIyBIBBqSW61+4hUs1BCGVUtxr9xgCWaiqMhly/Vcf3Xzjcb0CPnEgGEEMLfRXclWAJQQyaD2hS7dz8RXQQfitavt1jWZGJ9IUKtit7IG1/PaYVUk0NydvrNT+H5VJUoQQNRBq9PeDnidLHGMAMUDaFVhpLA2RfVu1R2HMuldlouC1umxDgj0EWfSKu63MzcJ4c+QlVXdQTuQtkVtZI7iHw/hjtRcFEJcFgFd10hyfRYP7rAE0LHOZflxN7SeCxvxLFH9S264SwtFLUpDADq3LYbzTl4xseTKRkxsfJwqrYa8tmXHiVQt3bAWD/WVpmzeEOGcIPMCFQDsjvqCHZCdVjWt9tUTn8NdDTBe9q6spFO1gj2R/tI+TF8NoE9Xq+E47Hh0OmXEGYKRTI7IrN4cjBgfhakzmjuArGJ/aCrl4VsWfGmBWekVlDYsreYHd1q1U6h6jtpK9tvOfsrILvQoCliWyKFUhgpRj0bUQNPvG8P4XqZAW168bZNOIqziiQF327fn2mfyYne5B8W7gGpUZ8+LUM2dvUysUdkpcrCvgLqDfLkYHi3iKsrIrKwLBiVQDXksBnBrkaM5K4ha3dOWGxGoAGt+xlrwjlVatnNDf8AOdOYWE3BYo97gEw1wkyDD773VS5FagRqPebTxSf+GPuYpuDYCzW3vErjvlAyPVJuLI4PIVAUxo4YwDiqPIrUNy5Akkt1q2AbQXAijlgs9zBizuZQuGgG8y6oSvUXFjdqZRUz5JRyQGMscUpYZYlVIJ0GEihCoMEx5as63ETICIEkuU8Y3aCDKqEEMFWQAnIw9XygFhtFkEQkW5bjVqx5ErcTK5FwvJMv8K3aXdGvubjyKB/O8g4hYk4G7TR+ysmjXobT30mvvLutH3KzZgSSLA+cs8V8O5pel+97dos8OaJO1f7S+Fxhmo7CXc6NVI4DBt9jc6p8YQhiVbUQwB9JsFaok8hznMbhjV+9fldyDh7RnBsIQCe98tvpOWfwmbtnHLXi3vxiAorhiFxqrHGVJbJqDWb25ACE/jjFV0s6socUjKMYLDJpYMPVqBcH6GYjwqE7OdJoXp3Dk1VXy94WHg1YD1EULe9CADTqAVmNX0s1zmfwY+zcmd0B4/sCA6sHTIQrKuPIx8svrFXuyMRX8Qvlvm4ri8YAChmXy1C2y2jaMieuhRI13QqZuHwqMyqadC4TVVowJ03Y25EHnGPgBJQCmVeHQkAEa2KaidrvUSPkCJY/Djj4LXJZ/wC2fWXrI1qw0txGtPUbKlSm+Pl6OfpG8wtxNqBp3CeWTqsMA+oNVbHpzN+01PwCGyjalSi/qDUttdGh6tKlq6b86ieB4ZDrOUlFRUP7wJ1kU2ynpuO+28XDDA3qhXqSMwAQBd0JJJYnXdbV05S/xPw7fBy9Rqruqmj8OqaCVL+YjMQTWlqIrb5avqIJxIAnMkrbdAb6A+0OWL6akNnND5lvrA8w3cfxGMKBQ5k73d+0zCbxBLLMPEN94sPLUSyBNGJG6/NMAuYwkSiRHiVuFWlwSZJaKrMqQyTRZaxLMoSExj3VLBgyTO7WorkuVUvTDdaruUZYSGMJg5FalQoZxERicOTByJ1JVo1M4HS4X4JjGL4Y56QflxPdcd2bJkBig0dl4crd9IkibMt9kaDqenEkQvxrSuA4fW1e4H5ztcb4Gi1oN2xX3sdIm4dbuG3Em7mhPF8oGnUa7Ekj7TRj8I1IWvTpDE6gaFdJykG/KTsk0z8nFFgbG5/1uJTJRuhDXHd7HY9uU1thVGIKFrQEWKIJF3ObnqTEsr8UxFbbb8vav8oIyNRIGx50DpnRPDYVVCQzMQWYclIsbX94rzTTY1Yqjunp1bUelzP5d+D/AHPELN+LeyQF5dEWh11V0PvFpxDLyI7UVVgRp00QRRFd5s8QxhSRo8s6BaC9vXV79wAYrLgJ0gKqjQWVqrWFQMxLfvHY/I7TeLsGOh1IPENQF0AxcABQA5q2FD+qNuW0aufJpZg2zv6j6AS7b3fNepvYTXwoOnHpCURkILeXZ4kLk06i24qlq9vh7xHH6T5ullPrQ0Cq6vS4YoP3hqY8u98o2pPEZ8mpg7HV8LbjoGWttjszD+8e8WmVxZVmB06SVYg6NhpJHTkK9hOhkyqBloo2t3J9e7IwGigPiIttuhqZs2U6n9dhhtRaiuqwtdNunKSDZ3ZtR7nvzNyiT1v2jg4H73Qcgf8A0wGa/p/NR1W4aMqpQMINE1DuqpJeqVcnVG6VJUgaTVLqu6ASSAyQnuIy5RlTW7OooMoyCCyFcsSpdQqbjIhM4iQIJmXGdz1yC49eKHbpMaITG/hz2mcjH3Nb8RBXiCDdyPhIiisTHFrdux+IkRp8YecqoaJcy/DivZXLU3iOKL8/nEXCKVCRLM6Y46NEbIUyFeXzjx4g9g2djf1i3x1AM13HTav2m+kqGIB5i9jMZc3fWPRB19vrAyKOkndGoRlYDnKOQne/b6QRCJkYnmd0LsdrJrlBhGVfSXEK3R7BNnfrvdyPiK1qUjULFitQ7iMdQQ7XyKgD+K7s/Svzh5WQszWzalYr6QunISKU77qBe49oURJ4ZlYKwTZwSp1IAVAskkn07EHetpE8OyGqUbsV3ZQVILAluygq1nltNuTxTH5IxqrA6aPoxoqtpRW9QNtZDtqbf1AdIr9pLqJKEh9YYBgpKu+YmjvRrKPqs4cvkRdW0JB8NyatNLd6b1gqd0AII5g+ahB7GDk4IrdshrRpKksMhcWAm3bvU1HxYb1jAOpdJ8wnSinDSkVuawKNW3M7TJ+LOnSVB0+XpO9qUFX732McX5Hyap16nP4eULKaZgAQASp5kE0edERb8CQaJGy2a6HtAPEnUWCqCeo1HSepFmV+JbfkNWxoc4hn911CcY7/AD2j8eBT16TPpYXt8/lA1GacX7sjaX4cA1cUUqBqMreINTKEAyqlRqJZJFWSW6iMkLTJpjys6gMqGFjEwxDdLqWsO4bcOe0W6EdI6s9NWqATKqEEMLXRHiy1H/i9j7zLpl+XMOAzymPnJidUtkqBEx1W913LDyCEFmjFbKhAWkDRoxjvBcCLikGQ9S9Uly5YhqVhsyARliC7SQKMl9RcPhLuqLzchR2sma+M8KdMhxgayCB6PUCSQKv5kCZMT6WVgdwQdtjO34V4zjTW+RXyPqVlpttmVjZPykalX1ZG8Azh1RlCal127qECdy3SVk8I0pgfzcZPEsy6Q2+MB9Opj/D7zQnjaMGXKjOjqQdL04O5BBPSzymPFxyBcIbFrOB2Y/8AEKjIhYOEND079RLqjdrT+jzMHKuilXyIqMWLuiZER3DAVSl150TvQ2ifFPDFwMyjIucaCwdVZF1ec2FhTb7MrUeuxmpv6SEatGBEJcurFndsaM6ZHx9AwZ0BvmASBznMz8W7gll2VdB0ggLqytlBPvrZvpC1Hw6epGGldOLK5uvUyHKBQ6tSr9iYjJhFIBqZ3AahRXS1kAAC9VUfqe0NGbVehT5aC1Y0DjKUTsQTYctt/FFLxbgKNRHl/Dstrz61fU8+8Jm4cClV521GwRppnZAtfMXcFsShTd3enkaBGm9+XMn8ogZDQXUaBsCzQPcDvLCsQedXvzq/9Y2Ym3JoUO19LjEChhfIV8jEaD2O2317TVh4FmR2JC+XpBB+IsTyESG9BxeHhdLkZLZwNgSaqtv029p5Vuc04/D3YEgbDuagfh9jbCx0k7aNEvUILNNODgy/WhVn26RWbFpNc/lDTQkAaUTLURzKtc+kdUupAaSGyiSGp3MuWxESYa4zMarcSETbiyipgOMiCTOmPVl7uy/ELq9qmTi8oN1MIYwmua5WdUZoRfaL0y9BmbXVXmS9ZhjAZ2PC/BfMIsgDa5d1suExMAz2Xif9GkQBgw9xPJZsdEiSVi9yRLuNxoD1qGEXvIJUs9yGNcjpLxkdZRuTUii5oyMtCovG4EHqR3TyTt7yeWN5ofihpoDrq/8AyIGUA3UwOT5tM/F4c7ANsA3Ukd6/WT9nNXMHcDbfvv8AlH4vFaUKUBC8thzu7PeZV41wDW2ognbtf+pnI/K7tdRcbwoxsV1B/SCa6HqIJRbQrd2oa6onblFZcxYkkAE86FCO4bDlzMEQF2AJAtVAUDckmgAB1M7Y7MQy82E29SD8B/7tvsb/AMpqerzXfQbV/wAzWCL9rVpWPw/KVxMFB89iuNQ6a3bVp1aLsLqFajtsYWfgMy4i7I4QOyv6XpMihN3NUt+YApJ33+uq1GvxEkEhMChxyPqRaF9D6lH0iMKlCGJAJR3XrRZWVdj1vf7RnEeH5lbIpDE41xtl1WhUsgfSwYgsR6h1vSSNojheHbI2kEelbJdwiIi0LLHkBYmVA2zp8T34r0LTC6Ymi2sOQwJrkLLcxudu0X+IHPUTuTVWOZOr35iNXwh6ViyIri7ZmIUUCLoHmCCKv6SY/DbFFxr1bgX6EAe2vkfg5fKZ/Lj9zxbEz2d99/lYh+aATQNEg7mzQ6EwzjVDuQ5DUBVqwHUmMRFfpoNnl8OntHnruNR5vEyWtVCDsNxzJ/zmRstkmuc2Lw+Pfc8+tCZsirvX6yPk3HEKfiHqh/IiTc0cPlC3tLbIpN10nSN69WWTeG5Fyi0JqkkDSSmNZqxySRLOVZmZ5JI2SER0kkKh6wj0lyRidjnovB/h/nvJJGLp+OfB/dE8Bn5ySQfFo8yhLkkhMBkkkhNZgySSZKSxJJCaoS8vrJJEqj8zOj4Xyz/+Xz/qkkkGcfF3P6N/9Z4b/wBj/wDucTO141/0vH/2mf8AXgJUkbN5Xxv4cnz8K/8AhmcvhPhy/wBn/wDbikknLL/G3d3xH/l4v7DF/hxTBxH7/wAj/hySSTyfH4ttyxyX5n/KHj5/eSSexucL84DSSRIqEqSSbqkkkkKoJJJJVf/Z",
    // this is the url for the profile avatar
    avatarURL:
      "https://media-exp1.licdn.com/dms/image/C4D03AQEVQZZZ5Xp3TA/profile-displayphoto-shrink_400_400/0/1597421920467?e=1646265600&v=beta&t=DuEETLVbyvFbS5wec1f3YqHQBrK9tBT5F7Jv7Z8O8uE",
    // social media bar position (left or right)
    socialMediaPosition: "position-left",
    // social media usernames
    twitter: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: null,
    lastname: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables); //render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new valus
    });
  });
};
