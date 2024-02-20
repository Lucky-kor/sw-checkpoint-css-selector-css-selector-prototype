import React from 'react';
import './pageDocs.css';

const PageDocs = () => {
    return (
        <div className='pageDocs'>
            <body data-content1='<body>' data-content2='</body>'>
                <header data-content1='<header>' data-content2='</header>'>
                    <h1 data-content1='<h1>' data-content2='</h1>'>
                        &hellip;
                    </h1>
                    <p
                        id='header_title_assi'
                        className='intro'
                        data-content1='<p id="header_title_assi" class="intro">'
                        data-content2='</p>'
                    >
                        &hellip;
                    </p>
                </header>
                <div 
                id="container"
                className="mx-auto"
                data-content1='<div id="container" class="mx-auto">' data-content2='</div>'>
                    <section
                        data-content1='<section>'
                        data-content2='</section>'
                    >
                        <h2 data-content1='<h2>' data-content2='</h2>'>
                            &hellip;
                        </h2>
                        <a
                            href="#!"
                            data-content1='<a href="#">'
                            data-content2='</a>'
                        >
                            &hellip;
                        </a>
                        <div data-content1='<div>' data-content2='</div>'>
                            <p
                                className='remark'
                                data-content1='<p class="remark">'
                                data-content2='</p>'
                            >
                                &hellip;
                            </p>
                        </div>
                    </section>
                    <section
                        className='show'
                        data-content1='<section class="show">'
                        data-content2='</section>'
                    >
                        <h2 data-content1='<h2>' data-content2='</h2>'>
                            &hellip;
                        </h2>
                        <a href="#!"
                            data-content1='<a href="#">'
                            data-content2='</a>'
                        >
                            &hellip;
                        </a>
                        <p
                            className='only'
                            data-content1='<p class="only">'
                            data-content2='</p>'
                        >
                            &hellip;
                        </p>
                        <p
                            id='only'
                            class='show'
                            data-content1='<p id="only" class="show">'
                            data-content2='</p>'
                        >
                            &hellip;
                        </p>
                    </section>
                    <article 
                    className="mx-auto"
                    data-content1='<article class="mx-auto">' data-content2='</article>'>
                        <p data-content1='<p>' data-content2='</p>'>
                            &hellip;
                        </p>
                        <inupt
                                    type='text'
                                    required
                                    data-content1='<input type=text required />'
                                />
                        <span
                            id='label'
                            className='center'
                            data-content1='<span id="label" class="center">'
                            data-content2='</span>'
                        >
                            &hellip;
                        </span>
                        <div
                            className='center'
                            data-content1='<div class="center">'
                            data-content2='</div>'
                        >
                            &hellip;
                        </div>
                    </article>
                    <article data-content1='<article>' data-content2='</article>'>
                        <ul 
                        className="mx-auto"
                        data-content1='<ul class="mx-auto">' data-content2='</ul>'>
                            <li
                                id='first_li'
                                className="item"
                                data-content1='<li id="first_li" class="item">'
                                data-content2='</li>'
                            >
                                &hellip;
                            </li>
                            <li
                                className='item'
                                data-content1='<li class="item">'
                                data-content2='</li>'
                            >
                                &hellip;
                            </li>
                            <li
                            className='item' 
                            data-content1='<li class="item">' data-content2='</li>'>
                                &hellip;
                            </li>
                        </ul>
                    </article>
                    <p
                        className='block-out'
                        data-content1='<p class="block-out">'
                        data-content2='</p>'
                    >
                        &hellip;
                    </p>
                </div>
                <footer data-content1='<footer>' data-content2='</footer>'>
                    <div
                        className='left'
                        data-content1='<div class="left">'
                        data-content2='</div>'
                    >
                        <p data-content1='<p>' data-content2='</p>'>
                            &hellip;
                        </p>
                    </div>
                    <div
                        className='center'
                        data-content1='<div class="center">'
                        data-content2='</div>'
                    >
                        <div data-content1='<div>' data-content2='</div>'>
                            &hellip;
                        </div>
                        <div data-content1='<div>' data-content2='</div>'>
                            &hellip;
                        </div>
                        <div data-content1='<div>' data-content2='</div>'>
                            &hellip;
                        </div>
                        <div data-content1='<div>' data-content2='</div>'>
                            &hellip;
                        </div>
                    </div>
                    <div
                        className='right'
                        data-content1='<div class="right">'
                        data-content2='</div>'
                    >
                        <div
                            className='out'
                            data-content1='<div class="out">'
                            data-content2='</div>'
                        >
                            &hellip;
                        </div>
                    </div>
                </footer>
            </body>
        </div>
    );
};
export default PageDocs;
