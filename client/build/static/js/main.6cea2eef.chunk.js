(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{131:function(e,t,n){},143:function(e,t,n){},164:function(e,t,n){},167:function(e,t,n){},236:function(e,t,n){},240:function(e,t,n){},246:function(e,t,n){},247:function(e,t,n){},248:function(e,t,n){},249:function(e,t,n){},250:function(e,t,n){},251:function(e,t,n){"use strict";n.r(t);var a=n(17),s=n.n(a),i=n(27),c=n(20),r=n(21),o=n(28),l=n(24),u=n(23),p=n(0),d=n.n(p),h=n(33),j=n.n(h),m=n(255),b=n(268),f=n(264),O=n(60),x=(n(164),n(3)),g=n(48),v=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={visible:!1,placement:"bottom"},e.showDrawer=function(){e.setState({visible:!0})},e.onClose=function(){e.setState({visible:!1})},e}return Object(r.a)(n,[{key:"logOut",value:function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.request("/api/auth/logout","DELETE");case 2:localStorage.clear(),window.location.reload();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.placement,n=e.visible;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(b.b,{children:Object(x.jsx)("div",{className:"header_logo",onClick:this.showDrawer,children:"MEDSPOT"})}),Object(x.jsx)(f.a,{title:"Menu",placement:t,closable:!1,onClose:this.onClose,visible:n,children:Object(x.jsx)(O.a,{onClick:this.logOut,children:"Log out"})},t)]})}}]),n}(d.a.Component),k=n(265),y=n(269),_=n(124),N=n(270),w=n(271),C=(n(167),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).handleClick=function(e){a.props.changePage(e.key),a.setState({current:e.key})},a.state={current:"search"},a}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.props.changePage("search"),this.setState({current:"search"})}},{key:"render",value:function(){var e=this.state.current;return Object(x.jsxs)(k.a,{className:"footer_menu",onClick:this.handleClick,selectedKeys:[e],mode:"horizontal",children:[Object(x.jsx)(k.a.Item,{icon:Object(x.jsx)(y.a,{})},"home"),Object(x.jsx)(k.a.Item,{icon:Object(x.jsx)(_.a,{})},"search"),Object(x.jsx)(k.a.Item,{icon:Object(x.jsx)(N.a,{})},"rss"),Object(x.jsx)(k.a.Item,{icon:Object(x.jsx)(w.a,{})},"user")]})}}]),n}(d.a.Component)),P=n(266),S=n(257),D=n(253),I=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={},a}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props,t=e.editMode,n=e.profile;return Object(x.jsxs)(S.a,{className:"user_data",title:"".concat(n.given_name," ").concat(n.family_name," "),extra:Object(x.jsx)(O.a,{onClick:function(e){e.preventDefault(),t("on")},children:"Edit"}),children:[Object(x.jsxs)("p",{children:["Email : ",n.email]}),Object(x.jsxs)("p",{children:["Phone : ",n.phone]}),Object(x.jsx)(D.a,{}),Object(x.jsxs)("p",{children:["CNP : ",n.cnp]}),Object(x.jsxs)("p",{children:["Date of birth : ",n.dob]}),Object(x.jsx)(D.a,{children:"Medical data"}),Object(x.jsxs)("p",{children:["Blood : ",n.blood_type]}),Object(x.jsxs)("p",{children:["Weight : ",n.weight]}),Object(x.jsxs)("p",{children:["Height : ",n.height]})]})}}]),n}(d.a.Component),F=n(258),T=n(260),M=n(256),q=n(92),E=n(41),z=n.n(E),A=n(48),B=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).onFinish=function(){var e=Object(i.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.props.loading("on"),e.next=3,A.request("/profile","PATCH",t);case 3:a.props.loading("off"),window.location.reload();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.onFinishFailed=function(e){console.log("Failed:",e)},a.state={user:a.props.user},a}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props,t=e.profile,n=e.editMode,a="YYYY-MM-DD";return Object(x.jsxs)(F.a,{className:"edit_form complete_form",name:"profile_info",initialValues:{remember:!0},onFinish:this.onFinish,onFinishFailed:this.onFinishFailed,children:[Object(x.jsx)(F.a.Item,{label:"CNP",name:"cnp",rules:[{required:!0,message:"Please input your CNP!"}],children:Object(x.jsx)(T.a,{defaultValue:t.cnp?t.cnp:"",className:"complete_form_input"})}),Object(x.jsx)(F.a.Item,{label:"Date of birth",name:"dob",rules:[{required:!0,message:"Please input your date of birth!"}],children:Object(x.jsx)(M.a,{defaultValue:t.dob?z()(t.dob,a):null,className:"complete_form_input",format:a})}),Object(x.jsx)(F.a.Item,{label:"Phone",name:"phone",children:Object(x.jsx)(T.a,{defaultValue:t.phone?t.phone:"",className:"complete_form_input"})}),Object(x.jsx)(F.a.Item,{label:"Weight",name:"weight",children:Object(x.jsx)(T.a,{defaultValue:t.weight?t.weight:"",className:"complete_form_input"})}),Object(x.jsx)(F.a.Item,{label:"Height",name:"height",children:Object(x.jsx)(T.a,{defaultValue:t.height?t.height:"",className:"complete_form_input"})}),Object(x.jsx)(F.a.Item,{label:"Medical Gender",name:"gender",children:Object(x.jsxs)(q.a,{defaultValue:t.gender?t.gender:"",className:"complete_form_input",placeholder:"Male or Female",allowClear:!0,children:[Object(x.jsx)(q.a.Option,{value:"male",children:"Male"}),Object(x.jsx)(q.a.Option,{value:"female",children:"Female"})]})}),Object(x.jsx)(F.a.Item,{label:"Blood type",name:"blood_type",children:Object(x.jsxs)(q.a,{defaultValue:t.blood_type?t.blood_type:"",className:"complete_form_input",placeholder:"A, B, AB or 0",allowClear:!0,children:[Object(x.jsx)(q.a.Option,{value:"A",children:"A"}),Object(x.jsx)(q.a.Option,{value:"B",children:"B"}),Object(x.jsx)(q.a.Option,{value:"AB",children:"AB"}),Object(x.jsx)(q.a.Option,{value:"0",children:"0"})]})}),Object(x.jsxs)(F.a.Item,{className:"edit_submit",children:[Object(x.jsx)(O.a,{className:"edit_submit_button",type:"primary",htmlType:"submit",children:"Submit"}),Object(x.jsx)(O.a,{className:"edit_submit_button",type:"danger",onClick:function(e){e.preventDefault(),n("off")},children:"Cancel"})]})]})}}]),n}(d.a.Component),Y=(n(236),n(48)),G=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).state={edit:!1,profile:{}},e.editMode=e.editMode.bind(Object(o.a)(e)),e.getProfile=e.getProfile.bind(Object(o.a)(e)),e.updateProfile=e.updateProfile.bind(Object(o.a)(e)),e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.getProfile()}},{key:"getProfile",value:function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.props.loading("on"),e.next=3,Y.request("/profile","GET");case 3:t=e.sent,this.setState({profile:t}),this.props.loading("off");case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"updateProfile",value:function(){this.getProfile(),this.setState({edit:!1})}},{key:"editMode",value:function(e){this.setState({edit:"on"===e})}},{key:"render",value:function(){var e=this.state,t=e.edit,n=e.profile;return Object(x.jsxs)("div",{className:"user",children:[Object(x.jsx)(P.a,{className:"user_avatar",size:{xs:100,sm:100,md:100,lg:100,xl:100,xxl:100},style:{backgroundColor:"#87d068"},icon:Object(x.jsx)(w.a,{}),src:"".concat(n.picture)}),t?Object(x.jsx)(B,{profile:n,loading:this.props.loading,editMode:this.editMode}):Object(x.jsx)(I,{profile:n,editMode:this.editMode})]})}}]),n}(d.a.Component),H=n(272),V=n(150),L=n(85),R=n(261),W=n(262),J=n(263),K=n(158),Z=n(95),$={width:"100%",height:"30em",right:"0",margin:"0"},Q=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props,t=e.center,n=e.target;return console.log(t,n),Object(x.jsx)(Z.b,{googleMapsApiKey:"AIzaSyCgPxDaSjZAVutlq-imNn24j3V1eYemR2w",children:Object(x.jsxs)(Z.a,{className:"google_maps_map",center:n,mapContainerStyle:$,clickableIcons:!0,defaultZoom:7,zoom:7,children:[Object(x.jsx)(Z.c,{position:t}),Object(x.jsx)(Z.c,{position:n,icon:"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"})]})})}}]),n}(d.a.Component),U=n(149),X=n(48),ee=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={location:{},showDetails:!1,showCabinets:!1,cabinets:[],details:{},phoneNumber:{}},a.getIssueDetails=a.getIssueDetails.bind(Object(o.a)(a)),a.getCabinets=a.getCabinets.bind(Object(o.a)(a)),a.getPhone=a.getPhone.bind(Object(o.a)(a)),a.hideCabinets=a.hideCabinets.bind(Object(o.a)(a)),a.hideDetails=a.hideDetails.bind(Object(o.a)(a)),a}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;navigator.geolocation?navigator.geolocation.getCurrentPosition((function(t){var n=t.coords,a={lat:n.latitude,lng:n.longitude};e.setState({location:a})})):alert("Geolocation is not supported by this browser.")}},{key:"getIssueDetails",value:function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.props.loading("on"),e.next=3,X.request("/health/issues/".concat(this.props.diagnostic.Issue.ID),"GET");case 3:t=e.sent,this.setState({details:t,showDetails:!0}),this.props.loading("off");case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"hideCabinets",value:function(){this.setState({showCabinets:!1,cabinets:{}})}},{key:"hideDetails",value:function(){this.setState({showDetails:!1,details:{}})}},{key:"getCabinets",value:function(){var e=Object(i.a)(s.a.mark((function e(t){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.props.loading("on"),n="circle:100000@".concat(this.state.location.lat,",").concat(this.state.location.lng),e.next=4,X.request("/places?type=".concat(t,"&locationbias=").concat(n),"GET");case 4:a=e.sent,this.setState({cabinets:a,showCabinets:!0}),this.props.loading("off");case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getPhone",value:function(){var e=Object(i.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X.request("/phone?id=".concat(t),"GET");case 2:n=e.sent,this.setState({phoneNumber:n});case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.props.diagnostic,n=t.Issue,a=t.Specialisation,s=this.state,i=s.showDetails,c=s.showCabinets,r=s.details,o=s.cabinets,l=s.location,u=s.phoneNumber,p=Object(x.jsx)("div",{children:"undefined"!=typeof u.result?Object(x.jsx)(U.CopyToClipboard,{text:u.result.formatted_phone_number,children:Object(x.jsx)("p",{children:u.result.formatted_phone_number})}):null});return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)(S.a,{className:"diagnostic_card",hoverable:!0,size:"small",title:n.Name,style:{width:300},onClick:this.getIssueDetails,children:[Object(x.jsx)("p",{children:n.ProfName}),Object(x.jsx)(D.a,{children:"Specialisations"}),a.map((function(e,t){return Object(x.jsx)(S.a,{size:"small",children:e.Name},t)}))]}),Object(x.jsxs)(R.a,{visible:i,onCancel:this.hideDetails,onOk:this.hideDetails,title:n.Name,children:[Object(x.jsx)("i",{children:r.Synonyms}),Object(x.jsx)(D.a,{children:"PossibleSymptoms"}),Object(x.jsx)("i",{children:r.PossibleSymptoms}),Object(x.jsx)(D.a,{children:"Description"}),Object(x.jsx)("p",{children:r.DescriptionShort}),Object(x.jsx)("p",{children:r.Description}),Object(x.jsx)("p",{children:r.MedicalCondition}),Object(x.jsx)(D.a,{children:"Treatments"}),Object(x.jsx)("p",{children:r.TreatmentDescription}),Object(x.jsx)(D.a,{children:"Specialisations"}),a.map((function(t,n){return Object(x.jsx)(S.a,{size:"small",hoverable:!0,onClick:function(n){n.preventDefault(),e.getCabinets(t.Name)},children:t.Name},n)}))]}),Object(x.jsx)(R.a,{visible:c,footer:[Object(x.jsx)(O.a,{type:"cancel",onClick:this.hideCabinets,children:"Cancel"},"cancel"),Object(x.jsx)(O.a,{type:"primary",onClick:this.hideCabinets,children:"OK"},"ok")],onCancel:this.hideCabinets,onOk:this.hideCabinets,title:"Cabinets in your area",children:o.candidates?o.candidates.map((function(t,n){return Object(x.jsxs)(S.a,{className:"cabinet_card",hoverable:!0,size:"small",title:t.name,extra:t.opening_hours?t.opening_hours.open_now?"Open":"Closed":"",children:[Object(x.jsx)(W.a,{disabled:!0,defaultValue:t.rating}),Object(x.jsx)(J.a,{bordered:!1,ghost:!0,children:Object(x.jsx)(J.a.Panel,{className:"Colapse_Maps_container",header:t.formatted_address,children:Object(x.jsx)(Q,{className:"Maps_container",center:l,target:t.geometry.location})},"1")},n),Object(x.jsx)(K.a,{content:p,title:"Phone Number",onMouseEnter:function(n){n.preventDefault(),e.getPhone(t.place_id)},children:Object(x.jsx)(O.a,{type:"primary",className:"right",style:{float:"left"},children:"Phone Number"})},"key")]},n)})):Object(x.jsx)(L.a,{description:"We could not find any cabinets on the selected specialization in your area !"})})]})}}]),n}(d.a.Component),te=(n(240),q.a.Option),ne=n(48),ae=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={children:[],simptoms:[],diagnostics:[],loading:!1},a.getDiagnostic=a.getDiagnostic.bind(Object(o.a)(a)),a.loading=a.loading.bind(Object(o.a)(a)),a}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ne.request("/health/simptoms","GET");case 2:t=e.sent,this.setState({simptoms:t,children:t.map((function(e){return Object(x.jsx)(te,{val:e.ID,children:e.Name},e.Name)}))});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getDiagnostic",value:function(){var e=Object(i.a)(s.a.mark((function e(t){var n,a,i=this;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.loading("on"),n=t.simptoms.map((function(e){return i.state.simptoms.filter((function(t){return t.Name===e}))[0].ID})),e.next=4,ne.request("/health/diagnosis?simptoms=".concat(JSON.stringify(n)),"GET");case 4:a=e.sent,this.setState({diagnostics:a}),this.loading("off");case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"loading",value:function(e){"on"===e?this.setState({loading:!0}):this.setState({loading:!1})}},{key:"render",value:function(){var e=this,t=this.state,n=t.diagnostics,a=t.loading;return Object(x.jsxs)("div",{className:"search_container",children:[Object(x.jsxs)(F.a,{className:"simptoms_form",onFinish:this.getDiagnostic,name:"diagnostic",children:[Object(x.jsx)(F.a.Item,{className:"simptoms_input",name:"simptoms",rules:[{required:!0,message:"To generate a diagnostic please enter a few simptoms first"}],valuePropName:"value",children:Object(x.jsx)(q.a,{mode:"multiple",placeholder:"Please select simptoms",className:"select_simptoms",children:this.state.children})}),Object(x.jsx)(F.a.Item,{children:Object(x.jsx)(O.a,{className:"comment_button",type:"primary",htmlType:"submit",children:Object(x.jsx)(H.a,{})})})]}),a?null:n.map((function(t,n){return Object(x.jsx)(ee,{loading:e.props.loading,diagnostic:t},n)})),a?Object(x.jsx)("div",{className:"loading_container",children:Object(x.jsx)(V.a,{size:"large"})}):null,0!==n.length||a?null:Object(x.jsx)(L.a,{description:Object(x.jsxs)("span",{children:[Object(x.jsx)("h3",{children:"Self diagnostic"}),Object(x.jsx)("p",{children:"Our app can provide you with a self diagnostic."}),Object(x.jsx)("i",{children:"The self diagnostic feature is experimental, and under no circumstances should it be taken as a reliable source of information."}),Object(x.jsx)("p",{children:Object(x.jsx)("b",{children:"In order to get a correct diagnostic please consult a medic"})}),Object(x.jsx)("p",{children:"The self diagnostic feature may help you determine what kind of checkup you may need"}),Object(x.jsx)(D.a,{}),Object(x.jsx)("p",{children:"To proceed provide a list of simptoms in the search bar above"})]})})]})}}]),n}(d.a.Component),se=(n(143),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(x.jsx)(b.b,{className:"app_loader_2",size:"middle",children:Object(x.jsx)(V.a,{size:"large"})})}}]),n}(d.a.Component)),ie=n(273),ce=n(274),re=n(275),oe=n(276),le=n(66),ue=n(254),pe=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state=a.props,a}return Object(r.a)(n,[{key:"render",value:function(){var e=this.state.comment;return Object(x.jsx)(ue.a,{author:Object(x.jsx)("div",{children:e.name}),avatar:Object(x.jsx)(P.a,{src:e.picture,alt:e.name}),content:Object(x.jsx)("p",{children:e.post}),datetime:Object(x.jsx)(le.a,{title:z()().format("YYYY-MM-DD HH:mm:ss"),children:Object(x.jsx)("span",{children:z()(e.time).fromNow()})})})}}]),n}(d.a.Component),de=n(48),he=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={openPost:!1,comments:[],likes:a.props.post.likes,dislikes:a.props.post.dislikes,action:a.props.likes[0]?a.props.likes[0].like?"like":"dislike":null},a.getComments=a.getComments.bind(Object(o.a)(a)),a.handleCancel=a.handleCancel.bind(Object(o.a)(a)),a.comment=a.comment.bind(Object(o.a)(a)),a.like=a.like.bind(Object(o.a)(a)),a}return Object(r.a)(n,[{key:"getComments",value:function(){var e=this;return new Promise(function(){var t=Object(i.a)(s.a.mark((function t(n,a){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,de.request("/comments/".concat(e.props.post._id),"GET");case 3:t.t1=t.sent,t.t2={openPost:!0,comments:t.t1},t.t0.setState.call(t.t0,t.t2),n();case 7:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}())}},{key:"handleCancel",value:function(){this.setState({openPost:!1,comments:[]})}},{key:"comment",value:function(){var e=Object(i.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.props.loading("on"),e.next=3,de.request("/comments/".concat(this.props.post._id),"POST",t);case 3:return e.next=5,this.getComments();case 5:this.props.loading("off");case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"like",value:function(){var e=Object(i.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=24;break}if("like"!==this.state.action){e.next=9;break}return this.props.loading("on"),e.next=5,de.request("/post/like/".concat(this.props.post._id),"DELETE");case 5:this.setState({action:null,likes:this.state.likes-1}),this.props.loading("false"),e.next=22;break;case 9:if("dislike"!==this.state.action){e.next=17;break}return this.props.loading("on"),e.next=13,de.request("/post/like/".concat(this.props.post._id),"POST");case 13:this.setState({action:"like",likes:this.state.likes+1,dislikes:this.state.dislikes-1}),this.props.loading("false"),e.next=22;break;case 17:return this.props.loading("on"),e.next=20,de.request("/post/like/".concat(this.props.post._id),"POST");case 20:this.setState({action:"like",likes:this.state.likes+1}),this.props.loading("false");case 22:e.next=45;break;case 24:if("dislike"!==this.state.action){e.next=32;break}return this.props.loading("on"),e.next=28,de.request("/post/dislike/".concat(this.props.post._id),"DELETE");case 28:this.setState({action:null,dislikes:this.state.dislikes-1}),this.props.loading("false"),e.next=45;break;case 32:if("like"!==this.state.action){e.next=40;break}return this.props.loading("on"),e.next=36,de.request("/post/dislike/".concat(this.props.post._id),"POST");case 36:this.setState({action:"dislike",likes:this.state.likes-1,dislikes:this.state.dislikes+1}),this.props.loading("false"),e.next=45;break;case 40:return this.props.loading("on"),e.next=43,de.request("/post/dislike/".concat(this.props.post._id),"POST");case 43:this.setState({action:"dislike",dislikes:this.state.dislikes+1}),this.props.loading("false");case 45:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.props.post,n=this.state,a=n.openPost,s=n.comments,i=n.likes,c=n.dislikes,r=n.action,o=[Object(x.jsx)(le.a,{title:"Like",children:Object(x.jsxs)("span",{onClick:function(t){t.preventDefault(),e.like(!0)},children:["liked"===r?Object(x.jsx)(ie.a,{}):Object(x.jsx)(ce.a,{}),Object(x.jsx)("span",{className:"comment-action",children:i})]})},"comment-basic-like"),Object(x.jsx)(le.a,{title:"Dislike",children:Object(x.jsxs)("span",{onClick:function(t){t.preventDefault(),e.like(!1)},children:["disliked"===r?Object(x.jsx)(re.a,{}):Object(x.jsx)(oe.a,{}),Object(x.jsx)("span",{className:"comment-action",children:c})]})},"comment-basic-dislike"),Object(x.jsx)("span",{onClick:this.getComments,children:"Comments"},"comment-basic-reply-to")];return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(ue.a,{actions:o,author:Object(x.jsx)("div",{children:t.name}),avatar:Object(x.jsx)(P.a,{src:t.picture,alt:t.name}),content:Object(x.jsx)("p",{children:t.post}),datetime:Object(x.jsxs)(le.a,{title:z()().format("YYYY-MM-DD HH:mm:ss"),children:[" ",Object(x.jsx)("span",{children:z()(t.time).fromNow()})," "]})}),!0===a?Object(x.jsx)(R.a,{title:"Comments",visible:a,onCancel:this.handleCancel,footer:[Object(x.jsxs)(F.a,{name:"comment_form",onFinish:this.comment,className:"comment_form",children:[Object(x.jsx)(F.a.Item,{className:"comment_input_container",name:"comment",children:Object(x.jsx)(T.a,{className:"comment_input",placeholder:"Say what you think"})}),Object(x.jsx)(F.a.Item,{children:Object(x.jsx)(O.a,{className:"comment_button",type:"primary",htmlType:"submit",children:Object(x.jsx)(H.a,{})})})]})],children:s.map((function(e,t){return Object(x.jsx)(pe,{comment:e},t)}))}):null]})}}]),n}(d.a.Component),je=(n(246),n(48)),me=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={feed:[]},a.post=a.post.bind(Object(o.a)(a)),a.getFeed=a.getFeed.bind(Object(o.a)(a)),a}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.props.loading("on"),e.next=3,this.getFeed();case 3:this.props.loading("off");case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getFeed",value:function(){var e=this;return new Promise(function(){var t=Object(i.a)(s.a.mark((function t(n,a){var i;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,je.request("/posts","GET");case 2:i=t.sent,e.setState({feed:i.posts,likes:i.likes}),n();case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}())}},{key:"post",value:function(){var e=Object(i.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.props.loading("on"),e.next=3,je.request("/posts","POST",t);case 3:return document.getElementById("comment_form_comment").value="",e.next=6,this.getFeed();case 6:this.props.loading("off");case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,n=t.feed,a=t.likes;return Object(x.jsxs)(b.b,{className:"home_container",direction:"vertical",children:[Object(x.jsx)("div",{className:"posts_container",children:n.length>0?n.map((function(t,n){return Object(x.jsx)(he,{loading:e.props.loading,likes:a.filter((function(e){return e.post_id===t._id})),post:t},n)})):Object(x.jsx)(L.a,{className:"no_data"})}),Object(x.jsxs)(F.a,{name:"comment_form",onFinish:this.post,className:"post_form comment_form",children:[Object(x.jsx)(F.a.Item,{className:"post_input_container",name:"comment",children:Object(x.jsx)(T.a,{className:"post_input",placeholder:"Say what you think"})}),Object(x.jsx)(F.a.Item,{children:Object(x.jsx)(O.a,{className:"comment_button",type:"primary",htmlType:"submit",children:Object(x.jsx)(H.a,{})})})]})]})}}]),n}(d.a.Component),be=n(259),fe=(n(247),n(48)),Oe=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).state={rss:[]},e.getRss=e.getRss.bind(Object(o.a)(e)),e.renderIcon=e.renderIcon.bind(Object(o.a)(e)),e.getRss(),e}return Object(r.a)(n,[{key:"renderIcon",value:function(e){if("undefined"!=typeof e["media:thumbnail"])return e["media:thumbnail"].$.url}},{key:"getRss",value:function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fe.request("/rss","GET");case 2:t=e.sent,this.setState({rss:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.rss;return Object(x.jsx)(be.b,{className:"rss_list",itemLayout:"vertical",size:"medium",pagination:{pageSize:5},dataSource:t,renderItem:function(t){return Object(x.jsxs)(be.b.Item,{className:"rss_item",actions:[Object(x.jsx)("span",{children:t.pubDate},"comment-basic-reply-to")],children:[Object(x.jsx)(be.b.Item.Meta,{avatar:Object(x.jsx)(P.a,{className:"avatar",src:e.renderIcon(t)}),title:Object(x.jsx)("a",{href:t.link,children:t.title}),description:t.categories,date:t.pubDate}),t.content.slice(0,120),"..."]},t.title)}})}}]),n}(d.a.Component),xe=(n(248),m.a.Header),ge=m.a.Footer,ve=m.a.Content,ke=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).state={page:"",loading:!1},e.changePage=e.changePage.bind(Object(o.a)(e)),e.loading=e.loading.bind(Object(o.a)(e)),e}return Object(r.a)(n,[{key:"loading",value:function(e){this.setState({loading:"on"===e})}},{key:"changePage",value:function(e){this.setState({page:e})}},{key:"render",value:function(){var e=this.state,t=e.loading,n=e.page;return Object(x.jsxs)(m.a,{className:"App",children:[Object(x.jsx)(xe,{className:"Header",children:Object(x.jsx)(v,{})}),Object(x.jsxs)(ve,{className:"Content",children:[t?Object(x.jsx)(se,{}):null,"user"===n?Object(x.jsx)(G,{loading:this.loading}):null,"search"===n?Object(x.jsx)(ae,{loading:this.loading}):null,"home"===n?Object(x.jsx)(me,{loading:this.loading}):null,"rss"===n?Object(x.jsx)(Oe,{loading:this.loading}):null]}),Object(x.jsx)(ge,{className:"Footer",children:Object(x.jsx)(C,{changePage:this.changePage})})]})}}]),n}(d.a.Component),ye=n(152),_e=n.n(ye),Ne=n.p+"static/media/logo4x.a7ec0667.png",we=(n(249),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleLogin=function(){var e=Object(i.a)(s.a.mark((function e(t){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("","/api/auth/google"),{method:"POST",body:JSON.stringify({googleData:t,token:t.tokenId}),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:if(!(a=e.sent).error){e.next=8;break}throw new Error(a.error);case 8:localStorage.sessionID=a.sessionID,window.location.reload();case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e}return Object(r.a)(n,[{key:"render",value:function(){return Object(x.jsxs)("div",{className:"auth",children:[Object(x.jsx)("img",{className:"auth_logo",alt:"amazing app logo",src:Ne}),Object(x.jsx)(_e.a,{clientId:"1064555667195-ia9b050tgs99p9alqf8i86pokjdv75a2.apps.googleusercontent.com",buttonText:"Log in with Google",onSuccess:this.handleLogin,onFailure:this.handleLogin,cookiePolicy:"single_host_origin"})]})}}]),n}(d.a.Component)),Ce=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(x.jsx)(b.b,{className:"app_loader",size:"middle",children:Object(x.jsx)(V.a,{size:"large"})})}}]),n}(d.a.Component),Pe=(n(131),n(267)),Se=n(48),De=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).onFinish=function(){var e=Object(i.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.props.loading("on"),e.next=3,Se.request("/profile","PATCH",t);case 3:a.props.loading("off"),window.location.reload();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.onFinishFailed=function(e){console.log("Failed:",e)},a.state={user:a.props.user},a}return Object(r.a)(n,[{key:"render",value:function(){return Object(x.jsxs)("div",{className:"complete",children:[Object(x.jsx)("img",{className:"complete_logo",alt:"medpot logo",src:Ne}),Object(x.jsxs)(F.a,{className:"complete_form",name:"profile_info",initialValues:{remember:!0},onFinish:this.onFinish,onFinishFailed:this.onFinishFailed,children:[Object(x.jsx)(F.a.Item,{label:"CNP",name:"cnp",rules:[{required:!0,message:"Please input your CNP!"}],children:Object(x.jsx)(T.a,{className:"complete_form_input"})}),Object(x.jsx)(F.a.Item,{label:"Date of birth",name:"dob",rules:[{required:!0,message:"Please input your date of birth!"}],children:Object(x.jsx)(M.a,{className:"complete_form_input",format:"YYYY-MM-DD"})}),Object(x.jsx)(F.a.Item,{label:"Phone",name:"phone",children:Object(x.jsx)(T.a,{className:"complete_form_input"})}),Object(x.jsx)(F.a.Item,{label:"Weight",name:"weight",children:Object(x.jsx)(T.a,{className:"complete_form_input"})}),Object(x.jsx)(F.a.Item,{label:"Height",name:"height",children:Object(x.jsx)(T.a,{className:"complete_form_input"})}),Object(x.jsx)(F.a.Item,{label:"Medical Gender",name:"gender",children:Object(x.jsxs)(q.a,{className:"complete_form_input",placeholder:"Male or Female",allowClear:!0,children:[Object(x.jsx)(q.a.Option,{value:"male",children:"Male"}),Object(x.jsx)(q.a.Option,{value:"female",children:"Female"})]})}),Object(x.jsx)(F.a.Item,{label:"Blood type",name:"blood_type",children:Object(x.jsxs)(q.a,{className:"complete_form_input",placeholder:"A, B, AB or 0",allowClear:!0,children:[Object(x.jsx)(q.a.Option,{value:"A",children:"A"}),Object(x.jsx)(q.a.Option,{value:"B",children:"B"}),Object(x.jsx)(q.a.Option,{value:"AB",children:"AB"}),Object(x.jsx)(q.a.Option,{value:"0",children:"0"})]})}),Object(x.jsx)(F.a.Item,{rules:[{required:!0,message:"Due to new laws and regulations we need your consent in order to be able to process your data"}],name:"gdpr",valuePropName:"checked",children:Object(x.jsx)(Pe.a,{className:"complete_form_input",children:"I agree to GDPR"})}),Object(x.jsx)(F.a.Item,{className:"complete_submit",children:Object(x.jsx)(O.a,{className:"complete_submit_button",type:"primary",htmlType:"submit",children:"Submit"})})]})]})}}]),n}(d.a.Component),Ie=n(48),Fe=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).onFinish=function(){var e=Object(i.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.props.loading("on"),e.next=3,Ie.request("/profile","PATCH",t);case 3:a.props.loading("off"),window.location.reload();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.onFinishFailed=function(e){return console.log("Failed:",e)},a.state={user:a.props.user},a}return Object(r.a)(n,[{key:"render",value:function(){return Object(x.jsxs)("div",{className:"complete",children:[Object(x.jsx)("img",{className:"complete_logo",alt:"medpot logo",src:Ne}),Object(x.jsxs)(F.a,{className:"complete_form",name:"profile_info",initialValues:{remember:!0},onFinish:this.onFinish,onFinishFailed:this.onFinishFailed,children:[Object(x.jsx)(D.a,{children:" Doctor info"}),Object(x.jsx)(F.a.Item,{label:"Specialization",name:"specialization",rules:[{required:!0,message:"Please input your Specialization!"}],children:Object(x.jsx)(T.a,{className:"complete_form_input"})}),Object(x.jsx)(F.a.Item,{label:"Phone",name:"phone",children:Object(x.jsx)(T.a,{className:"complete_form_input"})}),Object(x.jsx)(D.a,{children:" Cabinet info"}),Object(x.jsx)(F.a.Item,{label:"Specialization",name:"specialization_cab",rules:[{required:!0,message:"Please input the cab's specializations!"}],children:Object(x.jsx)(T.a,{className:"complete_form_input"})}),Object(x.jsx)(F.a.Item,{label:"Email",name:"email",rules:[{required:!0,message:"Please input the cab's email!"}],children:Object(x.jsx)(T.a,{className:"complete_form_input"})}),Object(x.jsx)(F.a.Item,{label:"Phone",name:"phone",children:Object(x.jsx)(T.a,{className:"complete_form_input"})}),Object(x.jsx)(F.a.Item,{label:"Name",name:"name",rules:[{required:!0,message:"Please input the cab's name!"}],children:Object(x.jsx)(T.a,{className:"complete_form_input"})}),Object(x.jsx)(F.a.Item,{label:"Map",name:"map",rules:[{required:!0,message:"Please mark the location of the cab."}],children:Object(x.jsx)(T.a,{className:"complete_form_input"})}),Object(x.jsx)(F.a.Item,{rules:[{required:!0,message:"Due to new laws and regulations we need your consent in order to be able to process your data"}],name:"gdpr",valuePropName:"checked",children:Object(x.jsx)(Pe.a,{className:"complete_form_input",children:"I agree to GDPR"})}),Object(x.jsx)(F.a.Item,{className:"complete_submit",children:Object(x.jsx)(O.a,{className:"complete_submit_button",type:"primary",htmlType:"submit",children:"Submit"})})]})]})}}]),n}(d.a.Component),Te=n(48),Me=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).onFinish=function(){var e=Object(i.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.props.loading("on"),e.next=3,Te.request("/profile","PATCH",t);case 3:a.props.loading("off"),window.location.reload();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.onFinishFailed=function(e){return console.log("Failed:",e)},a.pageSelect=function(e){return a.setState({page:e})},a.state={user:a.props.user,page:null},a.pageSelect=a.pageSelect.bind(Object(o.a)(a)),a}return Object(r.a)(n,[{key:"render",value:function(){var e=this;return"patient"===this.state.page?Object(x.jsx)(De,{user:this.props.user,loading:this.props.loading}):"doctor"===this.state.page?Object(x.jsx)(Fe,{user:this.props.user,loading:this.props.loading}):Object(x.jsxs)("div",{className:"complete",children:[Object(x.jsx)("img",{className:"complete_logo",alt:"medpot logo",src:Ne}),Object(x.jsxs)("div",{className:"complete_info_div",children:[Object(x.jsx)(D.a,{className:"complete_divider",children:"Hello !"}),Object(x.jsx)("p",{children:"We just want to make sure we are providing you with the right features according to your needs."}),Object(x.jsx)("p",{children:"We just need a bit more information about you."}),Object(x.jsx)(D.a,{className:"complete_divider",children:"Let's continue"})]}),Object(x.jsx)("div",{className:"complete_btn",children:Object(x.jsx)(O.a,{className:"btn-patient",onClick:function(t){t.preventDefault(),e.pageSelect("patient")},children:"Proceed to the form"})})]})}}]),n}(d.a.Component),qe=(n(250),n(48)),Ee=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).state={auth:null,complete:null,user:null,loading:!1},e.loading=e.loading.bind(Object(o.a)(e)),e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,qe.request("/session","GET");case 2:t=e.sent,this.setState({auth:t.auth,complete:t.complete,user:t.user});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"loading",value:function(e){this.setState({loading:"on"===e})}},{key:"render",value:function(){var e=this.state,t=e.auth,n=e.loading,a=e.complete,s=e.user;return null===t||n?Object(x.jsx)(Ce,{}):!0===t&&!1===a?Object(x.jsx)(Me,{user:s,loading:this.loading}):!0===t?Object(x.jsx)(ke,{}):Object(x.jsx)(we,{})}}]),n}(d.a.Component);j.a.render(Object(x.jsx)(Ee,{}),document.getElementById("root"))},48:function(e,t){e.exports={request:function(e,t,n){e=e.match(/http/)?e:""+e;var a={"Content-Type":"application/json",sessionID:localStorage.sessionID};return new Promise((function(s,i){fetch(e,{method:t,headers:a,body:n?JSON.stringify(n):null}).then((function(e){return e.json()})).then((function(e){return s(e)})).catch((function(e){return i(e)}))}))}}}},[[251,1,2]]]);
//# sourceMappingURL=main.6cea2eef.chunk.js.map