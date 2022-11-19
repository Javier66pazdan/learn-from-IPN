import math
import random
import pdfReader

#TODO no repte of date
def generateDate(sentences,level):
    question = []
    for x in sentences:
        for y in x.split(" "):
            if y.isnumeric() and len(y) == 4:
                iteration=0
                answers = []
                answers.append(int(y))
                while(iteration < 3):
                     wrong = int(y)+math.trunc(random.random()*level)
                     if not wrong in answers:
                        iteration+= 1
                        answers.append(wrong)
                question.append(
                    {
                        "question":x.replace(y,"_________"),
                        "answer":int(y),
                        "answers": answers
                    })
    return question

# generateDate(pdfReader.sliceSentence('''W roku 2018 przypada 100. rocznica odzyskania przez Polskę niepodległości. W tym
# szczególnym okresie przypominamy sobie dążenia Polaków, którzy przez okres 123 lat
# zaborów starali się odzyskać niepodległość, walcząc zbrojnie i prowadząc działania
# organicznikowskie. W roku 1918 marzenia naszych przodków przestały być dążeniami, a stały się
# rzeczywistością. Walka o Rzeczpospolitą była udziałem wielu osób i środowisk, wielkim
# wspólnym wysiłkiem ponad podziałami, którego wyjątkowym przykładem był udział
# Wielkopolan w zwycięskim Powstaniu Wielkopolskim.'''),5)