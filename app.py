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
    
@app.route('/brasil-article')
def brasil_article():
    with open('text/brasil_article.txt', 'r', encoding='utf-8') as file:
        text = file.read()
        return render_template('brasil_article.html', text=text)
    
@app.route('/cl-for-office-and-business')
def cl_for_office_and_business():
    with open('text\cl_for_office_and_business.txt', 'r', encoding='utf-8') as file:
        text = file.read()
        return render_template('cl_for_office_and_business.html', text=text)
    


@app.route('/cl-and-family-reletionships')
def cl_and_family_reletionships():
    with open('text\cl_and_family_reletionships.txt', 'r', encoding='utf-8') as file:
        text = file.read()
        return render_template('cl_and_family_reletionships.html', text=text)
    
@app.route('/cl-and-depression')
def cl_and_depression():
    with open('text\cl_and_depression.txt', 'r', encoding='utf-8') as file:
        text = file.read()
        return render_template('cl_and_depression.html', text=text)
    

@app.route('/yosimoto')
def yosimoto():
    with open('text\yosimoto.txt', 'r', encoding='utf-8') as file:
        text = file.read()
        return render_template('yosimoto.html', text=text)
    
@app.route('/reinolds')
def reinolds():
    with open('text/reinolds.txt', 'r', encoding='utf-8') as file:
        text = file.read()
        return render_template('reinolds.html', text=text)
    
@app.route('/morita')
def morita():
    with open('text\morita.txt', 'r', encoding='utf-8') as file:
        text = file.read()
        return render_template('morita.html', text=text)
    

