let h1 = document.createElement("h1");
    h1.innerText = "General knowledge quiz";
    h1.style.color = "red";
    document.body.appendChild(h1);
    
$(document).ready(function(){

    answers = ["Helsinki", "blue whale", "Windsor", "july", "4"]
    questions = ["What is the capital of Finland?","What's the biggest animal in the world?","What was Queen Elizabeth II's surname?","What month was Prince George born?","How many valves does the heart have?"]
    choice_options = [["Denmark","Rauma","Turku","Helsinki"],["elephant","blue whale","saltwater crocodile","white shark"],["Cooper","Smith","Hofstadter","Windsor"],["january","november","july","june"],["4","6","5","3"]]

    quizBox = $("#quiz-box"); // Jquery
    for (let i = 0; i < questions.length; i++) {
        quizBox.append ("<div class='questions-"+i+"'>"); 
        $('.questions-'+i).append ("<p> "+questions[i]+" </p>");
        $('.questions-'+i).append ("<label><input type='radio' name='q"+i+"' value='a'>"+choice_options[i][0]+"</label>")
        $('.questions-'+i).append ("<label><input type='radio' name='q"+i+"' value='a'>"+choice_options[i][1]+"</label>")
        $('.questions-'+i).append ("<label><input type='radio' name='q"+i+"' value='a'>"+choice_options[i][2]+"</label>")
        $('.questions-'+i).append ("<label><input type='radio' name='q"+i+"' value='a'>"+choice_options[i][3]+"</label>")
      }

    score = 0;
    reset = false;
     
    $("button").click (function (event){
           $("input[name=q"+i+"]").each (function (index){
                  choice = $(this).parent().text(); 
                  if ($( this ).prop("checked") == true && answers [0] == choice){
                    score += 1;
                  }

                  if ($( this ).prop("checked") == true && answers [1] == choice){
                    score += 1;
                 }

                  if ($( this ).prop("checked") == true && answers [2] == choice){
                    score += 1;
                }

                  if ($( this ).prop("checked") == true && answers [3] == choice){
                    score += 1;
                }

                  if ($( this ).prop("checked") == true && answers [4] == choice){
                    score += 1;
                }

           });
           
      $("#quiz-box").append ("<h2>Your score is: " + score + "</h2>");
      }); 

})