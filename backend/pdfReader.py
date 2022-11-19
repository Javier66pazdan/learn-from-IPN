import PyPDF2 
import spacy

def getTextFromFile(fname):
    pdfFileObj = open(fname, 'rb') 
    pdfReader = PyPDF2.PdfFileReader(pdfFileObj) 
    x = 0
    result = ''
    while x < pdfReader.numPages:
        pageObj = pdfReader.getPage(x)
        result = result+pageObj.extractText()
        x += 1
    return result

def sliceSentence(text):

    sentenceList = []
    save = ''
    sentence = ''
    for x in text.replace('\n',' '):
        if x == ".":
            sentence+= x
            save = x
        elif save == "." and x==' ':
            sentence += x
            save = ". "
        elif save == ". " and x.isupper():
            sentenceList.append(sentence)
            sentence =x
        else:
            sentence = sentence + x
            save = ""
    print(sentenceList)
        
     



sliceSentence('''W roku 2018 przypada 100. rocznica odzyskania przez Polskę niepodległości. W tym
szczególnym okresie przypominamy sobie dążenia Polaków, którzy przez okres 123 lat
zaborów starali się odzyskać niepodległość, walcząc zbrojnie i prowadząc działania
organicznikowskie. W roku 1918 marzenia naszych przodków przestały być dążeniami, a stały się
rzeczywistością. Walka o Rzeczpospolitą była udziałem wielu osób i środowisk, wielkim
wspólnym wysiłkiem ponad podziałami, którego wyjątkowym przykładem był udział
Wielkopolan w zwycięskim Powstaniu Wielkopolskim.''')