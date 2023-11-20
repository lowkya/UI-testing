// import {ComponentFixture, TestBed, tick} from '@angular/core/testing';
//
// import { ColorComponent } from './color.component';
// import {FormsModule} from "@angular/forms";
// import {By} from "@angular/platform-browser";
// import {RouterTestingModule} from "@angular/router/testing";
// import {Router} from "@angular/router";
// import {routes} from "../app-routing.module";
// import {async} from "rxjs";
//
// describe('ColorComponent', () => {
//   let component: ColorComponent;
//   let fixture: ComponentFixture<ColorComponent>;
//   let router: Router;
//
//   beforeEach(async () => {
//     TestBed.configureTestingModule({
//       imports: [
//         FormsModule,
//         RouterTestingModule,
//         RouterTestingModule.withRoutes(routes),
//       ],
//       declarations: [ColorComponent]
//     });
//
//     router = TestBed.inject(Router);
//     await router.navigate(['/color']);
//     fixture = TestBed.createComponent(ColorComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });
//
//   afterEach(() => {
//     // Reset router state or perform any necessary cleanup
//     TestBed.inject(Router).navigate(['/']);
//   });
//
//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
//
//   it('should have initial url', () => {
//     fixture.detectChanges();
//     expect(router.url).toBe('/color');
//   });
//
//   it('should check if button to go to page 3 exists', () => {
//     const buttons = fixture.debugElement.queryAll(By.css('button'));
//     const buttonWithText = buttons.find(button => button.nativeElement.textContent.includes('Click to go to page 3 !'));
//
//     expect(buttonWithText).not.toBeUndefined();
//   });
//
//   it('should check for text on button', () => {
//     const buttonElement = fixture.debugElement.query(By.css('button')).nativeElement
//     expect(buttonElement).not.toBeUndefined();
//     expect(buttonElement).not.toBeNull();
//     expect(buttonElement.textContent).toBe("Click to go to page 3 !");
//   });
//
//   it('should check if checkboxes exist', () => {
//     const checkbox = fixture.nativeElement.querySelectorAll('input[type="checkbox"]');
//     expect(checkbox).not.toBe(undefined);
//     expect(checkbox.length).toBe(4);
//   });
//
//   it('should check working of checkboxes', () => {
//     const checkbox = fixture.nativeElement.querySelectorAll('input[type="checkbox"]');
//     expect(checkbox).not.toBe(undefined);
//     expect(checkbox.length).toBe(4);
//
//     expect(checkbox[0].checked).toBeFalse();
//     expect(checkbox[1].checked).toBeTrue();
//     expect(checkbox[2].checked).toBeFalse();
//     expect(checkbox[3].checked).toBeTrue();
//
//     checkbox[2].click();
//     fixture.detectChanges();
//     expect(checkbox[2].checked).toBeTrue();
//
//     checkbox[2].click();
//     fixture.detectChanges();
//     expect(checkbox[2].checked).toBeFalse();
//   });
//
//   it('should check if background image exists', () => {
//     const divWithBackgroundImage = fixture.nativeElement.querySelector('.container');
//     const computedStyles = getComputedStyle(divWithBackgroundImage);
//     const backgroundImage = computedStyles.getPropertyValue('background-image');
//     expect(backgroundImage).toContain('color1-20191204062437970.jpg');
//   });
//
//   it('should check if list exists', () => {
//     const itemList = fixture.nativeElement.querySelectorAll('ul li');
//     expect(itemList).not.toBeUndefined();
//     expect(itemList.length).toBe(4);
//   });
//
//   it('should have correct list items', () => {
//     const itemList = fixture.nativeElement.querySelectorAll('ul li');
//     expect(itemList).not.toBeUndefined();
//     expect(itemList.length).toBe(4);
//
//     expect(itemList[0].textContent).toEqual("Black");
//     expect(itemList[1].textContent).toEqual("Purple");
//     expect(itemList[2].textContent).toEqual("Lavender");
//     expect(itemList[3].textContent).toEqual("Teal");
//   });
//
//   it('should take the flow to page 3', () => {
//     const button = fixture.debugElement.query(By.css('button'));
//     // const router = TestBed.inject(RouterTestingModule);
//     const spy = spyOn(component, "navigateToBook");
//
//     button.nativeElement.click();
//
//     expect(spy).toHaveBeenCalled();
//   });
//
//   it('should update the url to take to page 3', () => {
//     const navigateSpy = spyOn(router, 'navigate');
//
//     expect(router.url).toBe('/color');
//
//     // Trigger the navigation
//     component.navigateToBook();
//
//     // Wait for all asynchronous tasks to complete
//     fixture.whenStable().then(() => {
//       // Check if router.navigate was called with the correct argument
//       expect(navigateSpy).toHaveBeenCalledWith(['/book']);
//     });
//   });
//
//   it('should check if text box exists', () => {
//     const textbox = fixture.nativeElement.querySelectorAll('input[type="text"]');
//     expect(textbox).not.toBe(undefined);
//     expect(textbox.length).toBe(1);
//   });
//
//   it('should check working of text box', () => {
//     let textbox = fixture.nativeElement.querySelectorAll('input[type="text"]');
//     expect(textbox).not.toBe(undefined);
//     expect(textbox.length).toBe(1);
//     console.log(textbox);
//     expect(textbox[0].value).toEqual("");
//
//     component.favouriteColor = "black";
//
//     fixture.detectChanges();
//
//     fixture.whenStable().then(() => {
//       expect(textbox[0].value).toEqual("black");
//     });
//   });
//
//   it("should check for label of text box", () => {
//     let label = fixture.nativeElement.querySelector('.form-label');
//     expect(label).not.toBe(undefined);
//     expect(label.textContent).toBe("Enter below your favourite color :");
//   });
//
//   it("should check for label of checkbox", () => {
//     let checkBoxLabel = fixture.debugElement.query(By.css('.checkbox-label'));
//     expect(checkBoxLabel).not.toBeUndefined();
//     expect(checkBoxLabel.nativeElement.textContent.trim()).toEqual("Which of these are your favourite colors ?")
//   });
//
//   it("should check for heading on list", () => {
//     let listHeading = fixture.debugElement.query(By.css('.list-p'));
//     expect(listHeading).not.toBeUndefined();
//     expect(listHeading.nativeElement.textContent.trim()).toEqual("These are my favourite colors :")
//   });
//
//   it("should check for size of text box", () => {
//     const textbox = fixture.nativeElement.querySelector('input[type="text"]');
//     expect(textbox).not.toBeUndefined();
//     expect(textbox.style.width).toBe("800px");
//     expect(textbox.style.height).toBe("50px");
//   });
//
//   it("should check the size of list", () => {
//     const itemList = fixture.nativeElement.querySelector('ul');
//     expect(itemList).not.toBeUndefined();
//     expect(itemList.style.width).toBe('200px');
//   });
//
//   it("should check the size of list label", () => {
//     let listHeading = fixture.debugElement.query(By.css('.list-p'));
//     expect(listHeading).not.toBeUndefined();
//     expect(listHeading.nativeElement.style.width).toBe('400px')
//   });
//
//   it("should check the size of background image", () => {
//     const divWithBackgroundImage = fixture.nativeElement.querySelector('.container');
//     const computedStyles = getComputedStyle(divWithBackgroundImage);
//     expect(computedStyles.width).toBe('1140px');
//     expect(computedStyles.height).toBe('900px');
//   });
//
//   it("should check size of checkboxes", () => {
//     const checkbox = fixture.nativeElement.querySelector('input[type="checkbox"]');
//     expect(checkbox).not.toBe(undefined);
//     expect(checkbox.style.width).toBe('20px');
//   });
//
//   it("should check for size of button", () => {
//     const buttonElement = fixture.debugElement.query(By.css('button')).nativeElement
//     expect(buttonElement).not.toBeUndefined();
//     expect(buttonElement).not.toBeNull();
//     expect(buttonElement.style.width).toBe('100%')
//     expect(buttonElement.style.height).toBe('50px')
//   });
//
//   it("should check for location of button", () => {
//     const buttonElement:HTMLButtonElement = fixture.nativeElement.querySelector('button');
//     expect(buttonElement).toBeDefined();
//     const buttonRect = buttonElement.getBoundingClientRect();
//     expect(buttonRect.left).toBe(30);
//     expect(buttonRect.right).toBe(1170);
//     expect(buttonRect.top).toBe(178);
//     expect(buttonRect.bottom).toBe(228);
//   });
//
//   it("should check for location of text box", () => {
//     const textBox = fixture.nativeElement.querySelector('input[type="text"]');
//     expect(textBox).not.toBeUndefined();
//     const textBoxRect = textBox.getBoundingClientRect();
//     expect(textBoxRect.left).toBe(200);
//     expect(textBoxRect.right).toBe(1000);
//     expect(textBoxRect.top).toBe(120);
//     expect(textBoxRect.bottom).toBe(170);
//   });
//
//   it("should check for location of background image", () => {
//     const divWithBackgroundImage = fixture.nativeElement.querySelector('.container');
//     const backgroundRect = divWithBackgroundImage.getBoundingClientRect();
//
//     expect(backgroundRect.top).toBe(73);
//     expect(backgroundRect.bottom).toBe(973);
//     expect(backgroundRect.left).toBe(30);
//     expect(backgroundRect.right).toBe(1170);
//   });
//
//   it("should check for location of list", () => {
//     const itemList = fixture.nativeElement.querySelector('ul');
//     expect(itemList).not.toBeUndefined();
//     const itemRect = itemList.getBoundingClientRect();
//     expect(itemRect.top).toBe(282.5);
//     expect(itemRect.bottom).toBe(372.5);
//     expect(itemRect.left).toBe(42);
//     expect(itemRect.right).toBe(242);
//   });
//
//   it("should check for location of check box", () => {
//     const checkbox = fixture.nativeElement.querySelector('input[type="checkbox"]');
//     expect(checkbox).not.toBe(undefined);
//
//     const checkBoxRect = checkbox.getBoundingClientRect();
//     expect(checkBoxRect.top).toBe(439.5);
//     expect(checkBoxRect.bottom).toBe(452.5);
//     expect(checkBoxRect.left).toBe(567.6015625);
//     expect(checkBoxRect.right).toBe(587.6015625);
//   });
// });
