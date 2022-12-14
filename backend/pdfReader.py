import PyPDF2

def getTextFromFile(fname):
    if fname.split(".")[2] =="docx":
        f = open(fname, "r",encoding='utf-8')
        return f.read()
    else:
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
    return sentenceList