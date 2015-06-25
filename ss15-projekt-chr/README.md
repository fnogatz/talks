# HTML5 University of Ulm Slide Templates

This is an adaption of the
[io-2012-slides](https://code.google.com/p/io-2012-slides/), originally
developed by Google (based on the trunk code from February 16, 2014). 
I have adapted the slides for university presentations, which I held, by
means of style and additional slides.
The result is a template `template-uulm.html`, which you can view
[here](http://cmichi.github.io/uulm-slide-templates/template-uulm.html).

## Institute logos

The template contains the logos of the *Institute of Media Informatics* 
and the *Institute of Distributed Systems*. To change the institute which is
displayed, just rename the folder `images/slide-institute-mi`
to `images/slide-institute`. 

For general instructions on how to use the template see the text below
or watch this [video](https://www.youtube.com/watch?v=WRvECXyWj80).


## Original Google Description

### Configuring the slides

Much of the deck is customized by changing the settings in [`slide_config.js`](slide_config.js).
Some of the customizations include the title, Analytics tracking ID, speaker
information (name, social urls, blog), web fonts to load, themes, and other
general behavior.

#### Customizing the `#io12` hash

The bottom of the slides include `#io12` by default. If you'd like to change
this, please update the variable `$social-tags: '#io12';` in
[`/theme/scss/default.scss`](theme/scss/default.scss).

See the next section on "Editing CSS" before you go editing things.

### Editing CSS

[Compass](http://compass-style.org/install/) is a CSS preprocessor used to compile
SCSS/SASS into CSS. We chose SCSS for the new slide deck for maintainability,
easier browser compatibility, and because...it's the future!

That said, if not comfortable working with SCSS or don't want to learn something
new, not a problem. The generated .css files can already be found in
(see [`/theme/css`](theme/css)). You can just edit those and bypass SCSS altogether.
However, our recommendation is to use Compass. It's super easy to install and use.

#### Installing Compass and making changes

First, install compass:

    sudo gem update --system
    sudo gem install compass

Next, you'll want to watch for changes to the exiting .scss files in [`/theme/scss`](theme/scss)
and any new one you add:

    $ cd io-2012-slides
    $ compass watch

This command automatically recompiles the .scss file when you make a change.
Its corresponding .css file is output to [`/theme/css`](theme/css). Slick.

By default, [`config.rb`](config.rb) in the main project folder outputs minified
.css. It's a best practice after all! However, if you want unminified files,
run watch with the style output flag:

    compass watch -s expanded

*Note:* You should not need to edit [`_base.scss`](theme/scss/_base.scss).

### Running the slides

The slides can be run locally from `file://` making development easy :)

### Running from a web server

If at some point you should need a web server, use [`serve.sh`](serve.sh). It will
launch a simple one and point your default browser to [`http://localhost:8000/template.html`](http://localhost:8000/template.html):

    $ cd io-2012-slides
    $ ./serve.sh

You can also specify a custom port:

    $ ./serve.sh 8080

### Presenter mode

The slides contain a presenter mode feature (beta) to view + control the slides
from a popup window.

To enable presenter mode, add `presentme=true` to the URL: [http://localhost:8000/template.html?presentme=true](http://localhost:8000/template.html?presentme=true)

To disable presenter mode, hit [http://localhost:8000/template.html?presentme=false](http://localhost:8000/template.html?presentme=false)

Presenter mode is sticky, so refreshing the page will persist your settings.

---

That's all she wrote!


## License

The code is licensed under the [Apache License
2.0](http://www.apache.org/licenses/LICENSE-2.0).
