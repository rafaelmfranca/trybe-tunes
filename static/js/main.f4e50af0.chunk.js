(this.webpackJsonptrybetunes=this.webpackJsonptrybetunes||[]).push([[0],{29:function(e,t,a){},31:function(e,t,a){},33:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(21),c=a.n(s),i=(a(29),a(14)),o=a(6),l=a(7),d=a(9),j=a(8),u=a(13),b=a(4),h=a(2),m=a.n(h),O=a(3),f=(a(31),a(0)),p=function(){return Object(f.jsx)("div",{className:"Mensagem"})},x="user",g=function(e){return localStorage.setItem(x,JSON.stringify(e))},v=function(e){return function(t){setTimeout((function(){t(e)}),1500)}},S=function(){return new Promise((function(e){var t=JSON.parse(localStorage.getItem(x));null===t&&(t={}),v(t)(e)}))},k=function(e){return new Promise((function(t){g(Object(i.a)(Object(i.a)({},{name:"",email:"",image:"",description:""}),e)),v("OK")(t)}))},N=function(e){return new Promise((function(t){g(Object(i.a)({},e)),v("OK")(t)}))},y=(a(33),"https://github.com/identicons/jasonlong.png"),w=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={name:"",isButtonDisabled:!0,loading:!1,redirect:!1},e.handleChange=function(t){var a=t.target.value;e.setState({name:a},(function(){return e.handleButtonStatus()}))},e.handleButtonStatus=function(){e.state.name.length>=3?e.setState({isButtonDisabled:!1}):e.setState({isButtonDisabled:!0})},e.handleSubmit=Object(O.a)(m.a.mark((function t(){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.state.name,e.setState({loading:!0}),t.next=4,k({name:a,image:y});case 4:e.setState({redirect:!0});case 5:case"end":return t.stop()}}),t)}))),e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.isButtonDisabled,n=e.loading,r=e.redirect;return Object(f.jsxs)("div",{"data-testid":"page-login",className:"Login",children:[Object(f.jsxs)("div",{className:"logo",children:[Object(f.jsx)("i",{className:"fab fa-spotify fa-2x"}),Object(f.jsx)("span",{className:"trybe-tunes",children:Object(f.jsx)("strong",{children:"TrybeTunes"})})]}),r&&Object(f.jsx)(b.a,{to:"/search"}),n?Object(f.jsx)(p,{}):Object(f.jsx)("div",{className:"form-login",children:Object(f.jsxs)("form",{children:[Object(f.jsxs)("label",{htmlFor:"name",children:[Object(f.jsx)("small",{children:Object(f.jsx)("strong",{children:"Nome de usu\xe1rio"})}),Object(f.jsx)("input",{"data-testid":"login-name-input",type:"text",name:"name",value:t,onChange:this.handleChange})]}),Object(f.jsx)("button",{type:"button","data-testid":"login-submit-button",disabled:a,onClick:this.handleSubmit,children:Object(f.jsx)("strong",{children:"Entrar"})})]})})]})}}]),a}(n.Component),C=w,F=(a(42),function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={loading:!1,name:"",image:""},e.getLoggedUser=Object(O.a)(m.a.mark((function t(){var a,n,r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({loading:!0}),t.next=3,S();case 3:a=t.sent,n=a.name,r=a.image,e.setState({name:n,image:r,loading:!1});case 7:case"end":return t.stop()}}),t)}))),e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getLoggedUser()}},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.name,n=e.image;return Object(f.jsxs)("header",{"data-testid":"header-component",className:"Header",children:[Object(f.jsxs)("div",{className:"logo",children:[Object(f.jsx)("i",{className:"fab fa-spotify fa-2x"}),Object(f.jsx)("span",{className:"trybe-tunes",children:Object(f.jsx)("strong",{children:"TrybeTunes"})})]}),Object(f.jsxs)("div",{className:"nav-section",children:[Object(f.jsxs)("nav",{children:[Object(f.jsx)("li",{children:Object(f.jsx)(u.b,{"data-testid":"link-to-search",to:"/search",children:"Pesquisa"})}),Object(f.jsx)("li",{children:Object(f.jsx)(u.b,{"data-testid":"link-to-favorites",to:"/favorites",children:"Favoritos"})}),Object(f.jsx)("li",{children:Object(f.jsx)(u.b,{"data-testid":"link-to-profile",to:"/profile",children:"Perfil"})})]}),Object(f.jsx)("hr",{}),t?Object(f.jsx)(p,{}):Object(f.jsxs)("div",{className:"profile-header",children:[Object(f.jsx)("img",{src:n,alt:""}),Object(f.jsx)("span",{"data-testid":"header-user-name",children:a})]})]})]})}}]),a}(n.Component)),I=F,B=(a(43),function(){return Object(f.jsx)("footer",{className:"Footer",children:Object(f.jsxs)("p",{children:["Made with"," ",Object(f.jsx)("i",{className:"fas fa-heart green"})," ","by Rafael Giori"]})})}),D=function(){var e=Object(O.a)(m.a.mark((function e(t){var a,n,r,s,c,i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=encodeURI(t).replaceAll("%20","+"),n="https://itunes.apple.com/search?entity=album&term=".concat(a),e.next=4,fetch(n);case 4:return r=e.sent,e.next=7,r.json();case 7:return s=e.sent,c=s.results,i=c.map((function(e){return{artistId:e.artistId,artistName:e.artistName,collectionId:e.collectionId,collectionName:e.collectionName,collectionPrice:e.collectionPrice,artworkUrl100:e.artworkUrl100,releaseDate:e.releaseDate,trackCount:e.trackCount}})),e.abrupt("return",i);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=D,P=(a(44),""),A=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={loading:!1,artistName:"",isButtonDisabled:!0,apiWasFetched:!1,response:[]},e.handleChange=function(t){var a=t.target.value;e.setState({artistName:a},(function(){return e.handleButtonStatus()}))},e.handleButtonStatus=function(){e.state.artistName.length>=2?e.setState({isButtonDisabled:!1}):e.setState({isButtonDisabled:!0})},e.handleSubmit=Object(O.a)(m.a.mark((function t(){var a,n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.state.artistName,P=a,e.setState({loading:!0}),t.next=5,U(a);case 5:n=t.sent,e.setState({loading:!1,artistName:"",response:n,apiWasFetched:!0});case 7:case"end":return t.stop()}}),t)}))),e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.loading,a=e.artistName,n=e.isButtonDisabled,r=e.response,s=e.apiWasFetched;return Object(f.jsxs)("main",{children:[Object(f.jsx)(I,{}),t?Object(f.jsx)("div",{className:"loading",children:Object(f.jsx)(p,{})}):Object(f.jsx)("div",{"data-testid":"page-search",className:"Search",children:Object(f.jsxs)("div",{className:"search-header",children:[Object(f.jsx)("input",{"data-testid":"search-artist-input",type:"text",value:a,onChange:this.handleChange,placeholder:"Nome do artista"}),Object(f.jsx)("button",{type:"button","data-testid":"search-artist-button",disabled:n,onClick:this.handleSubmit,children:"Pesquisar"})]})}),Object(f.jsxs)("div",{className:"search-result",children:[s&&r.length>0&&Object(f.jsx)("p",{className:"search-title-center",children:'Todos os \xe1lbuns para "'.concat(P,'"')}),s&&0===r.length&&Object(f.jsx)("p",{className:"search-title-center",children:'Nenhum resultado encontrado para "'.concat(P,'"')}),Object(f.jsx)("div",{className:"album-list",children:r.map((function(e){var t=e.artworkUrl100,a=e.collectionId,n=e.collectionName,r=e.artistName;return Object(f.jsx)("div",{className:"album-card",children:Object(f.jsxs)(u.b,{"data-testid":"link-to-album-".concat(a),to:"/album/".concat(a),children:[Object(f.jsx)("img",{src:t.replace("100x100bb.jpg","600x600bb.jpg"),alt:""}),Object(f.jsxs)("div",{className:"album-card-info",children:[Object(f.jsx)("p",{children:n}),Object(f.jsx)("p",{children:r})]})]})},a)}))})]}),Object(f.jsx)(B,{})]})}}]),a}(n.Component),L=A,M=function(){var e=Object(O.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://itunes.apple.com/lookup?id=".concat(t,"&entity=song"));case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n.results);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=M,J=a(15),T=a.n(J),K=(a(45),function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.data,a=t.artistName,n=t.trackId,r=t.trackName,s=t.previewUrl,c=e.data,i=e.handleFavoriteSong,o=e.checked,l=e.favoriteImg,d=e.index;return Object(f.jsx)("div",{className:"track-container",children:Object(f.jsxs)("div",{className:"MusicCard",children:[Object(f.jsx)("p",{className:"track-number",children:Object(f.jsx)("strong",{children:d})}),l&&Object(f.jsx)("img",{src:l,alt:""}),Object(f.jsxs)("div",{className:"track-infos",children:[Object(f.jsx)("p",{children:r}),Object(f.jsx)("p",{children:a})]}),Object(f.jsxs)("audio",{"data-testid":"audio-component",src:s,controls:!0,children:[Object(f.jsx)("track",{kind:"captions"}),"O seu navegador n\xe3o suporta o elemento"," ",Object(f.jsx)("code",{children:"audio"}),"."]}),Object(f.jsx)("label",{htmlFor:n,children:Object(f.jsx)("input",{"data-testid":"checkbox-music-".concat(n),type:"checkbox",name:n,id:n,onChange:function(){return i(c)},checked:o})})]})})}}]),a}(n.Component)),R=(T.a.string,K),W=(a(46),a(24)),q="favorite_songs";JSON.parse(localStorage.getItem(q))||localStorage.setItem(q,JSON.stringify([]));var G=function(){return JSON.parse(localStorage.getItem(q))},H=function(e){return localStorage.setItem(q,JSON.stringify(e))},Y=function(e){return function(t){setTimeout((function(){t(e)}),500)}},$=function(){return new Promise((function(e){var t=G();Y(t)(e)}))},_=function(e){return new Promise((function(t){if(e){var a=G();H([].concat(Object(W.a)(a),[e]))}Y("OK")(t)}))},z=function(e){return new Promise((function(t){var a=G();H(a.filter((function(t){return t.trackId!==e.trackId}))),Y("OK")(t)}))},Q=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={album:{},artworkUrl100:"",copyright:"",tracks:[],loading:!1,favorites:[]},e.fetchAlbumMusics=Object(O.a)(m.a.mark((function t(){var a,n,r,s,c,i;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.props.id,t.next=3,E(a);case 3:return n=t.sent,r=n[0],s=r.artworkUrl100,c=r.copyright,t.next=7,$();case 7:i=t.sent,e.setState({album:n[0],artworkUrl100:s,copyright:c,tracks:n.slice(1),favorites:i});case 9:case"end":return t.stop()}}),t)}))),e.isFavoriteSong=function(t){return e.state.favorites.some((function(e){return e.trackId===t}))},e.handleFavoriteSong=function(){var t=Object(O.a)(m.a.mark((function t(a){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.setState({loading:!0}),!e.isFavoriteSong(a.trackId)){t.next=6;break}return t.next=4,z(a);case 4:t.next=8;break;case 6:return t.next=8,_(a);case 8:return t.next=10,$();case 10:n=t.sent,e.setState({loading:!1,favorites:n});case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.fetchAlbumMusics()}},{key:"render",value:function(){var e=this,t=this.state,a=t.album,n=a.artistName,r=a.collectionName,s=t.artworkUrl100,c=t.tracks,i=t.copyright,o=t.loading;return Object(f.jsxs)("main",{children:[Object(f.jsx)(I,{}),Object(f.jsx)("div",{className:"Album",children:o?Object(f.jsx)("div",{className:"loading",children:Object(f.jsx)(p,{})}):Object(f.jsxs)("div",{"data-testid":"page-album",className:"album-content",children:[Object(f.jsxs)("div",{className:"album-infos",children:[Object(f.jsx)("img",{className:"blurred",src:s.replace("100x100bb.jpg","600x600bb.jpg"),alt:""}),Object(f.jsx)("img",{className:"cover",src:s.replace("100x100bb.jpg","600x600bb.jpg"),alt:""}),Object(f.jsxs)("div",{className:"album-infos-text",children:[Object(f.jsx)("small",{children:Object(f.jsx)("strong",{children:"ALBUM"})}),Object(f.jsx)("p",{"data-testid":"album-name",children:Object(f.jsx)("strong",{children:r})}),Object(f.jsxs)("small",{"data-testid":"artist-name",children:[Object(f.jsx)("strong",{children:n}),Object(f.jsx)("span",{children:" \u26ac ".concat(i.match(/\d+/))}),Object(f.jsx)("span",{children:" \u26ac ".concat(c.length," m\xfasicas")})]})]})]}),Object(f.jsx)("hr",{}),Object(f.jsx)("div",{className:"album-tracks",children:c.map((function(t,a){return Object(f.jsx)(R,{data:t,index:+a+1,handleFavoriteSong:e.handleFavoriteSong,checked:e.isFavoriteSong(t.trackId)},t.trackId)}))})]})}),Object(f.jsx)(B,{})]})}}]),a}(n.Component),V=Q,X=(a(47),function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={loading:!1,favorites:[],name:"",image:""},e.fetchFavoriteSongs=Object(O.a)(m.a.mark((function t(){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({loading:!0}),t.next=3,$();case 3:a=t.sent,e.setState({loading:!1,favorites:a});case 5:case"end":return t.stop()}}),t)}))),e.isFavoriteSong=function(t){return e.state.favorites.some((function(e){return e.trackId===t}))},e.handleFavoriteSong=function(){var t=Object(O.a)(m.a.mark((function t(a){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.setState({loading:!0}),!e.isFavoriteSong(a.trackId)){t.next=4;break}return t.next=4,z(a);case 4:return t.next=6,$();case 6:n=t.sent,e.setState({loading:!1,favorites:n});case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.getLoggedUser=Object(O.a)(m.a.mark((function t(){var a,n,r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({loading:!0}),t.next=3,S();case 3:a=t.sent,n=a.name,r=a.image,e.setState({name:n,image:r,loading:!1});case 7:case"end":return t.stop()}}),t)}))),e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.fetchFavoriteSongs(),this.getLoggedUser()}},{key:"render",value:function(){var e=this,t=this.state,a=t.loading,n=t.favorites,r=t.name,s=t.image;return Object(f.jsxs)("main",{children:[Object(f.jsx)(I,{}),Object(f.jsxs)("div",{className:"Favorites",children:[a?Object(f.jsx)("div",{className:"loading",children:Object(f.jsx)(p,{})}):Object(f.jsxs)("div",{"data-testid":"page-favorites",className:"favorites-content",children:[Object(f.jsxs)("div",{className:"favorites-infos",children:[Object(f.jsx)("img",{className:"blurred",src:"https://i.pinimg.com/564x/fe/5c/36/fe5c36b8b4cbaa728f3c03a311e002cb.jpg",alt:""}),Object(f.jsx)("img",{className:"cover",src:"https://i.pinimg.com/564x/fe/5c/36/fe5c36b8b4cbaa728f3c03a311e002cb.jpg",alt:""}),Object(f.jsxs)("div",{className:"favorites-infos-text",children:[Object(f.jsx)("small",{children:Object(f.jsx)("strong",{children:"PLAYLIST"})}),Object(f.jsx)("p",{children:Object(f.jsx)("strong",{children:"M\xfasicas Favoritas"})}),Object(f.jsxs)("small",{className:"favorites-profile",children:[Object(f.jsx)("img",{src:s,alt:""}),Object(f.jsx)("strong",{children:r}),Object(f.jsx)("span",{children:" \u26ac ".concat(n.length," m\xfasicas")})]})]})]}),Object(f.jsx)("hr",{}),Object(f.jsx)("div",{className:"favorites-tracks",children:n.map((function(t,a){return Object(f.jsx)("div",{children:Object(f.jsx)(R,{data:t,index:a+1,favoriteImg:t.artworkUrl60,handleFavoriteSong:e.handleFavoriteSong,checked:e.isFavoriteSong(t.trackId)})},t.trackId)}))})]}),Object(f.jsx)(B,{})]})]})}}]),a}(n.Component)),Z=X,ee=(a(48),function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={loading:!1,user:{}},e.getLoggedUser=Object(O.a)(m.a.mark((function t(){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({loading:!0}),t.next=3,S();case 3:a=t.sent,e.setState({loading:!1,user:a});case 5:case"end":return t.stop()}}),t)}))),e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getLoggedUser()}},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.user,n=a.name,r=a.email,s=a.image,c=a.description;return Object(f.jsxs)("main",{children:[Object(f.jsx)(I,{}),t?Object(f.jsx)("div",{className:"loading",children:Object(f.jsx)(p,{})}):Object(f.jsxs)("div",{"data-testid":"page-profile",className:"Profile",children:[Object(f.jsx)("img",{"data-testid":"profile-image",src:s,alt:"Profile"}),Object(f.jsxs)("div",{className:"profile-infos",children:[Object(f.jsx)("small",{children:Object(f.jsx)("strong",{children:"PERFIL"})}),Object(f.jsx)("p",{children:Object(f.jsx)("strong",{children:n})}),Object(f.jsx)("p",{children:r}),Object(f.jsx)("p",{children:c}),Object(f.jsx)("button",{type:"button",children:Object(f.jsx)(u.b,{to:"/profile/edit",children:"Editar perfil"})})]})]}),Object(f.jsx)(B,{})]})}}]),a}(n.Component)),te=ee,ae=a(17),ne=(a(49),function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={loading:!1,isButtonDisabled:!0,user:{},redirect:!1},e.handleSaveButtonStatus=function(){e.validateEmptyFields()&&e.validateEmail()?e.setState({isButtonDisabled:!1}):e.setState({isButtonDisabled:!0})},e.validateEmptyFields=function(){var t=e.state.user;return[t.name,t.image,t.description].every((function(e){return e.trim().length>0}))},e.validateEmail=function(){var t=e.state.user.email;return/^\S+@\S+\.\S+$/.test(t)},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState((function(e){var t=e.user;return{user:Object(i.a)(Object(i.a)({},t),{},Object(ae.a)({},n,r))}}),(function(){return e.handleSaveButtonStatus()}))},e.getLoggedUser=Object(O.a)(m.a.mark((function t(){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({loading:!0}),t.next=3,S();case 3:a=t.sent,e.setState({loading:!1,user:a},(function(){return e.handleSaveButtonStatus()}));case 5:case"end":return t.stop()}}),t)}))),e.handleSubmit=Object(O.a)(m.a.mark((function t(){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.state.user,e.setState({loading:!0}),t.next=4,N(a);case 4:e.setState({redirect:!0});case 5:case"end":return t.stop()}}),t)}))),e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getLoggedUser()}},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.isButtonDisabled,n=e.user,r=n.name,s=n.email,c=n.image,i=n.description,o=e.redirect;return Object(f.jsxs)("main",{children:[Object(f.jsx)(I,{}),o&&Object(f.jsx)(b.a,{to:"/profile"}),t?Object(f.jsx)("div",{className:"loading",children:Object(f.jsx)(p,{})}):Object(f.jsx)("div",{"data-testid":"page-profile-edit",className:"ProfileEdit",children:Object(f.jsxs)("form",{children:[Object(f.jsx)("img",{src:c,alt:"Profile"}),Object(f.jsxs)("label",{htmlFor:"image",children:[Object(f.jsx)("small",{children:Object(f.jsx)("strong",{children:"Imagem de perfil"})}),Object(f.jsx)("input",{"data-testid":"edit-input-image",name:"image",type:"text",value:c,onChange:this.handleChange})]}),Object(f.jsxs)("label",{htmlFor:"name",children:[Object(f.jsx)("small",{children:Object(f.jsx)("strong",{children:"Nome"})}),Object(f.jsx)("input",{"data-testid":"edit-input-name",name:"name",type:"text",value:r,onChange:this.handleChange})]}),Object(f.jsxs)("label",{htmlFor:"email",children:[Object(f.jsx)("small",{children:Object(f.jsx)("strong",{children:"E-mail"})}),Object(f.jsx)("input",{"data-testid":"edit-input-email",name:"email",type:"text",value:s,onChange:this.handleChange})]}),Object(f.jsxs)("label",{htmlFor:"description",children:[Object(f.jsx)("small",{children:Object(f.jsx)("strong",{children:"Descri\xe7\xe3o"})}),Object(f.jsx)("textarea",{"data-testid":"edit-input-description",name:"description",type:"text",value:i,onChange:this.handleChange})]}),Object(f.jsx)("button",{type:"button","data-testid":"edit-button-save",disabled:a,onClick:this.handleSubmit,children:"Salvar perfil"})]})}),Object(f.jsx)(B,{})]})}}]),a}(n.Component)),re=ne,se=function(){return Object(f.jsx)("div",{"data-testid":"page-not-found"})},ce=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(f.jsx)(u.a,{children:Object(f.jsxs)(b.d,{children:[Object(f.jsx)(b.b,{path:"/profile/edit",component:re}),Object(f.jsx)(b.b,{path:"/profile",component:te}),Object(f.jsx)(b.b,{path:"/favorites",component:Z}),Object(f.jsx)(b.b,{path:"/album/:id",render:function(e){var t=e.match.params;return Object(f.jsx)(V,Object(i.a)({},t))}}),Object(f.jsx)(b.b,{path:"/search",component:L}),Object(f.jsx)(b.b,{exact:!0,path:"/trybe-tunes",component:C}),Object(f.jsx)(b.b,{path:"*",component:se})]})})}}]),a}(n.Component),ie=ce;c.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(ie,{})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.f4e50af0.chunk.js.map