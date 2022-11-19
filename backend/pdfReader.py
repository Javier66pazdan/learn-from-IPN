import PyPDF2 

def getTextFromFile(fname):
    pdfFileObj = open(fname, 'rb') 
    pdfReader = PyPDF2.PdfFileReader(pdfFileObj) 
    x = 0
    result = ''
    while x < pdfReader.numPages:
        pageObj = pdfReader.getPage(x)
        result = result+pageObj.extractText()
        x += 1
    print(result)
    return result