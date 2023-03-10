'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">crm documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-602d005911a886ef6bc39c81c2631477a8c60f2ab82883657108ab108adc1ff2bf311d5dfc0e75519c314eaaae709767d62c573c81e91bdc8ab5815c9a8e527f"' : 'data-target="#xs-components-links-module-AppModule-602d005911a886ef6bc39c81c2631477a8c60f2ab82883657108ab108adc1ff2bf311d5dfc0e75519c314eaaae709767d62c573c81e91bdc8ab5815c9a8e527f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-602d005911a886ef6bc39c81c2631477a8c60f2ab82883657108ab108adc1ff2bf311d5dfc0e75519c314eaaae709767d62c573c81e91bdc8ab5815c9a8e527f"' :
                                            'id="xs-components-links-module-AppModule-602d005911a886ef6bc39c81c2631477a8c60f2ab82883657108ab108adc1ff2bf311d5dfc0e75519c314eaaae709767d62c573c81e91bdc8ab5815c9a8e527f"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ClientsModule.html" data-type="entity-link" >ClientsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ClientsModule-346261a7e9be540a8071732944b26d69b77c2b428036809e0f916e8b16a244e8ad1b274caa8552039b70c49af16fd57f9c4dcf0622157b52a4b8c1fbb17f3827"' : 'data-target="#xs-components-links-module-ClientsModule-346261a7e9be540a8071732944b26d69b77c2b428036809e0f916e8b16a244e8ad1b274caa8552039b70c49af16fd57f9c4dcf0622157b52a4b8c1fbb17f3827"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ClientsModule-346261a7e9be540a8071732944b26d69b77c2b428036809e0f916e8b16a244e8ad1b274caa8552039b70c49af16fd57f9c4dcf0622157b52a4b8c1fbb17f3827"' :
                                            'id="xs-components-links-module-ClientsModule-346261a7e9be540a8071732944b26d69b77c2b428036809e0f916e8b16a244e8ad1b274caa8552039b70c49af16fd57f9c4dcf0622157b52a4b8c1fbb17f3827"' }>
                                            <li class="link">
                                                <a href="components/PageAddClientComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageAddClientComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageEditClientComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageEditClientComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageListClientsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageListClientsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ClientsRoutingModule.html" data-type="entity-link" >ClientsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/IconsModule.html" data-type="entity-link" >IconsModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LoginModule.html" data-type="entity-link" >LoginModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LoginModule-56bb13dbb18c1706616cd88650affcc39458d90582199761c518d78a18674e4c2a11a85ede778232c01047ca303de46eb4cc71767b8ea2edbd77d643b787a508"' : 'data-target="#xs-components-links-module-LoginModule-56bb13dbb18c1706616cd88650affcc39458d90582199761c518d78a18674e4c2a11a85ede778232c01047ca303de46eb4cc71767b8ea2edbd77d643b787a508"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginModule-56bb13dbb18c1706616cd88650affcc39458d90582199761c518d78a18674e4c2a11a85ede778232c01047ca303de46eb4cc71767b8ea2edbd77d643b787a508"' :
                                            'id="xs-components-links-module-LoginModule-56bb13dbb18c1706616cd88650affcc39458d90582199761c518d78a18674e4c2a11a85ede778232c01047ca303de46eb4cc71767b8ea2edbd77d643b787a508"' }>
                                            <li class="link">
                                                <a href="components/PageForgotPasswordComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageForgotPasswordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageResetPasswordComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageResetPasswordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageSignInComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageSignInComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageSignUpComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageSignUpComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginRoutingModule.html" data-type="entity-link" >LoginRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/OrdersModule.html" data-type="entity-link" >OrdersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-OrdersModule-3e859942b55ebbae005aec9524bb73a2cefb234db9f6e116edfb280c726a3ade593c5045f4500855797d31b099bab5f35c28719579b9be421933ba9ecc5fdf29"' : 'data-target="#xs-components-links-module-OrdersModule-3e859942b55ebbae005aec9524bb73a2cefb234db9f6e116edfb280c726a3ade593c5045f4500855797d31b099bab5f35c28719579b9be421933ba9ecc5fdf29"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-OrdersModule-3e859942b55ebbae005aec9524bb73a2cefb234db9f6e116edfb280c726a3ade593c5045f4500855797d31b099bab5f35c28719579b9be421933ba9ecc5fdf29"' :
                                            'id="xs-components-links-module-OrdersModule-3e859942b55ebbae005aec9524bb73a2cefb234db9f6e116edfb280c726a3ade593c5045f4500855797d31b099bab5f35c28719579b9be421933ba9ecc5fdf29"' }>
                                            <li class="link">
                                                <a href="components/PageAddOrderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageAddOrderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageEditOrderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageEditOrderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageListOrdersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageListOrdersComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/OrdersRoutingModule.html" data-type="entity-link" >OrdersRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PageNotFoundModule.html" data-type="entity-link" >PageNotFoundModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PageNotFoundModule-67f5c4a0e0bb13efc0aafbc5f370d82130e200053841f651fb435ba1cfff47c6e31e3f7280dcce4e931a1c66b2aff16c8b4503a4ee22a327e04e05181734e91a"' : 'data-target="#xs-components-links-module-PageNotFoundModule-67f5c4a0e0bb13efc0aafbc5f370d82130e200053841f651fb435ba1cfff47c6e31e3f7280dcce4e931a1c66b2aff16c8b4503a4ee22a327e04e05181734e91a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PageNotFoundModule-67f5c4a0e0bb13efc0aafbc5f370d82130e200053841f651fb435ba1cfff47c6e31e3f7280dcce4e931a1c66b2aff16c8b4503a4ee22a327e04e05181734e91a"' :
                                            'id="xs-components-links-module-PageNotFoundModule-67f5c4a0e0bb13efc0aafbc5f370d82130e200053841f651fb435ba1cfff47c6e31e3f7280dcce4e931a1c66b2aff16c8b4503a4ee22a327e04e05181734e91a"' }>
                                            <li class="link">
                                                <a href="components/PageNotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageNotFoundComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PageNotFoundRoutingModule.html" data-type="entity-link" >PageNotFoundRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TemplatesModule.html" data-type="entity-link" >TemplatesModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UiModule.html" data-type="entity-link" >UiModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UiModule-94705d956c0378aa0cd55011ac10d36e6ed2f04962d8aba97b8fafee5daf15c2762545b2708aedad168c297bff61f2489394bccf570ac8f83b994df6b5d804e7"' : 'data-target="#xs-components-links-module-UiModule-94705d956c0378aa0cd55011ac10d36e6ed2f04962d8aba97b8fafee5daf15c2762545b2708aedad168c297bff61f2489394bccf570ac8f83b994df6b5d804e7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UiModule-94705d956c0378aa0cd55011ac10d36e6ed2f04962d8aba97b8fafee5daf15c2762545b2708aedad168c297bff61f2489394bccf570ac8f83b994df6b5d804e7"' :
                                            'id="xs-components-links-module-UiModule-94705d956c0378aa0cd55011ac10d36e6ed2f04962d8aba97b8fafee5daf15c2762545b2708aedad168c297bff61f2489394bccf570ac8f83b994df6b5d804e7"' }>
                                            <li class="link">
                                                <a href="components/UiComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UiComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});