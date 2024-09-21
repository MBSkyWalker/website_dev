from flask import Flask, render_template


app = Flask(__name__)


@app.route('/')
def home():
    return render_template('main.html')

@app.route('/about')
def about():
    return render_template('about.html')


@app.route('/const-life-act')
def const_life_act():
    return render_template('const_life_act.html')


@app.route('/const-life-reciprocity')
def const_life_recip():
    return render_template('const_life_recip.html')

@app.route("/books")
def books():
    return render_template('books.html')


@app.route('/emotions')
def emщtions():
    with open('text/emotions.txt', 'r', encoding='utf-8') as file:
        text = file.read()
    return render_template('emotions.html', text=text)

@app.route('/study')
def study():
    with open('text/study.txt',  'r', encoding='utf-8') as file:
        text = file.read()
    return render_template('study.html', text=text)


@app.route("/neurotic-suffering")
def ns():
    with open('text/neurotic_suffer.txt', 'r', encoding='utf-8') as file:
        text = file.read()
    return render_template('neurotic_suffer.html', text=text)


@app.route('/myths-and-alternatives')
def mys_and_alt():
    with open('text/myths_and_alternatives.txt', 'r', encoding='utf-8') as file:
        text = file.read()
        return render_template('myths_and_alternatives.html', text=text)
    

    
@app.route('/cl-cognitive-behavior')
def cl_cog_beh():
    with open('text/cl_cognitive_behavior.txt', 'r', encoding='utf-8') as file1:
        text1 = file1.read()
    with open('text/cl_cognitive_behavior2.txt', 'r', encoding='utf-8') as file2:
        text2 = file2.read()
        
        return render_template('cognitive_behavior.html', text2=text2, text1=text1)