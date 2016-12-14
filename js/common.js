 $(function(){
	 var megaMenu = {
 		init: function(){
 			this.setParam();
 			this.bindEvent();
 		},
 		setParam: function(){
 			this.menuItem = $('.mega-menu__group');
 			this.menuItemHead = $('.mega-menu__group__head');
 			this.menuItemHeadLink = $('.mega-menu__group__head__link');
 			this.menuItemItem = $('.mega-menu__group__wrapper');
 			this.megaMenu = $('.mega-menu');
 			this.overTimer = 0;
 			this.leaveTimer = 0;
 		},
 		bindEvent: function(){
 			var self = this;
 			this.megaMenu.mousemove(function(e){
 				clearTimeout(self.overTimer);
 				clearTimeout(self.leaveTimer);
 				self.overTimer = setTimeout(function(){
 					if($(e.target).is(self.menuItemHead) || $(e.target).is(self.menuItemHeadLink)){
 						self.closeMenu();
 						if($(e.target).is(self.menuItemHeadLink)){
 							self.openMenu($(e.target.parentElement));
 						}else{
 							self.openMenu($(e.target));
 						}
 					}
 				},45);
 			});
 			this.megaMenu.mouseleave(function(){
 				self.leaveTimer = setTimeout(function(){
 					self.closeMenu();
 				},180);
 			});
 		},
 		openMenu: function(selfElement){
 			selfElement.addClass('mega-menu__group__head--on');
 			selfElement.next(this.menuItemItem).show();
 		},
 		closeMenu: function(){
 			this.menuItemHead.removeClass('mega-menu__group__head--on');
 			this.menuItemItem.hide();
 		}
 	};
	 megaMenu.init();
 });
