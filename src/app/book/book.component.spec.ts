import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookComponent } from './book.component';
import {FormsModule} from "@angular/forms";
import {By} from "@angular/platform-browser";
import {Router, RouterModule} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {routes} from "../app-routing.module";

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;
  let router: Router;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        RouterModule,
        RouterTestingModule,
        RouterTestingModule.withRoutes(routes),
      ],
      declarations: [BookComponent]
    });

    router = TestBed.inject(Router);
    await router.navigate(['/book']);
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check if text box exists', () => {
    const textBox = fixture.nativeElement.querySelector('input[type="text"]');
    expect(textBox).not.toBeUndefined();
  });

  it('should check text box by entering a value', () => {
    const textBox = fixture.nativeElement.querySelector('input[type="text"]');
    expect(textBox).not.toBeUndefined();

    textBox.value = "Harry Potter";
    textBox.dispatchEvent(new Event('input'));

    fixture.detectChanges();
    expect(textBox.value).toBe("Harry Potter");
  });

  it('should check if button to go to page 1 exists', () => {
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    const buttonWithText = buttons.find(button => button.nativeElement.textContent.includes('Click here to go to page 1 !'));
    expect(buttonWithText).not.toBeUndefined();
  });

  it('should check for slider', () => {
    const slider = fixture.nativeElement.querySelectorAll('input[type="range"]');
    expect(slider).not.toBeUndefined();
    expect(slider.length).toEqual(1);
  });

  it('should have radio buttons', () => {
    const radioButtons = fixture.nativeElement.querySelectorAll('input[type="radio"]');
    expect(radioButtons).not.toBeUndefined();
    expect(radioButtons.length).toEqual(2);
    expect(radioButtons[0].value).toEqual("Yes");
    expect(radioButtons[1].value).toEqual("No");
  });

  it('should check if radio buttons work properly', () => {
    const radioButtons = fixture.nativeElement.querySelectorAll('input[type="radio"]');

    expect(radioButtons.length).toEqual(2);

    let radioButtonToSelect = radioButtons[0];
    radioButtonToSelect.click();

    // After clicking, check if the radio button is selected
    fixture.detectChanges();

    expect(radioButtonToSelect.checked).toBe(true);
    expect(radioButtons[1].checked).toBe(false);

    radioButtonToSelect = radioButtons[1];
    radioButtonToSelect.click();

    // After clicking, check if the radio button is selected
    fixture.detectChanges();

    expect(radioButtonToSelect.checked).toBe(true);
    expect(radioButtons[0].checked).toBe(false);
  });

  it('should check for background image', () => {
    const divWithBackgroundImage = fixture.nativeElement.querySelector('.container');
    const computedStyles = getComputedStyle(divWithBackgroundImage);
    const backgroundImage = computedStyles.getPropertyValue('background-image');
    expect(backgroundImage).toContain('opened-book-with-flying-pages-butterflies-dark-backgroundgenerative-ai_391052-12859.avif');
  });

  it("should check working of slider", () => {
    expect(fixture.nativeElement.querySelector('p').textContent).toEqual("Selected Value: 50");

    component.sliderValue = 75;

    fixture.detectChanges();

    const slider = fixture.nativeElement.querySelectorAll('input[type="range"]');
    expect(slider).not.toBeUndefined();
    expect(slider.length).toEqual(1);
    expect(fixture.nativeElement.querySelector('p').textContent).toEqual("Selected Value: 75");
  });

  it("check for existence of label for slider", () => {
    let sliderLabel = fixture.debugElement.query(By.css('label[for="customRange"]'));
    expect(sliderLabel).not.toBeUndefined();
    expect(sliderLabel.nativeElement.textContent).toBe("How much do you like the book :");
  });

  it("check for existence of label for radio", () => {
    let radioLabel = fixture.debugElement.query(By.css('.radio-label'));
    expect(radioLabel).not.toBeUndefined();
    expect(radioLabel.nativeElement.textContent.trim()).toEqual("Do you like reading ?")
  });

  it("check for existence of label for text box", () => {
    let label = fixture.nativeElement.querySelector('.form-label');
    expect(label).not.toBe(undefined);
    expect(label.textContent).toBe("Enter below your favourite book :");
  });

  it("should navigate to page 1 on clicking go to page 1 button", () => {
    const button = fixture.debugElement.query(By.css('button'));
    // const router = TestBed.inject(RouterTestingModule);
    const spy = spyOn(component, "goBack");

    button.nativeElement.click();

    expect(spy).toHaveBeenCalled();
  });

  it('should update the url to take to page 3', () => {
    let navigateSpy = spyOn(router, 'navigate');

    expect(router.url).toBe('/book');

    // Trigger the navigation
    component.goBack();

    // Wait for all asynchronous tasks to complete
    fixture.whenStable().then(() => {
      // Check if router.navigate was called with the correct argument
      expect(navigateSpy).toHaveBeenCalledWith(['']);
    });
  });

  it("should check for size of text box", () => {
    const textBox = fixture.nativeElement.querySelector('input[type="text"]');
    expect(textBox.style.width).toBe('800px');
    expect(textBox.style.height).toBe('50px');
  });

  it("should check for size of the button", () => {
    const buttonElement = fixture.debugElement.query(By.css('button')).nativeElement
    expect(buttonElement).not.toBeUndefined();
    expect(buttonElement).not.toBeNull();
    expect(buttonElement.style.width).toBe('100%');
    expect(buttonElement.style.height).toBe('50px');
  });

  it("should check for size of slider", () => {
    const slider = fixture.nativeElement.querySelector('input[type="range"]');
    expect(slider).not.toBeUndefined();
    expect(slider.style.width).toBe('200px');
    expect(slider.style.height).toBe('10px');
  });

  it("should check for size of radio buttons", () => {
    const option1Element: HTMLLabelElement = fixture.nativeElement.querySelector('.custom-radio');
    const option2Element: HTMLLabelElement = fixture.nativeElement.querySelector('.custom-radio');

    expect(option1Element).toBeDefined();
    expect(option1Element.style.fontSize).toBe('16px');

    expect(option2Element).toBeDefined();
    expect(option2Element.style.fontSize).toBe('16px');
  });

  it("should check for size of background image", () => {
    const divWithBackgroundImage = fixture.nativeElement.querySelector('.container');
    const computedStyles = getComputedStyle(divWithBackgroundImage);
    expect(computedStyles.width).toBe('1140px');
    expect(computedStyles.height).toBe('900px');
  });

  it("should check for location of button", () => {
    const buttonElement:HTMLButtonElement = fixture.nativeElement.querySelector('button');
    expect(buttonElement).toBeDefined();
    const buttonRect = buttonElement.getBoundingClientRect();
    expect(buttonRect.left).toBe(42);
    expect(buttonRect.right).toBe(1158);
    expect(buttonRect.top).toBe(178);
    expect(buttonRect.bottom).toBe(228);
  });

  it("should check for location of text box", () => {
    const textBox = fixture.nativeElement.querySelector('input[type="text"]');
    expect(textBox).not.toBeUndefined();
    const textBoxRect = textBox.getBoundingClientRect();
    expect(textBoxRect.left).toBe(200);
    expect(textBoxRect.right).toBe(1000);
    expect(textBoxRect.top).toBe(120);
    expect(textBoxRect.bottom).toBe(170);
  });

  it("should check for location of slider", () => {
    const slider = fixture.nativeElement.querySelector('input[type="range"]');
    expect(slider).not.toBeUndefined();
    const sliderRect = slider.getBoundingClientRect();

    expect(sliderRect.top).toBe(283.5);
    expect(sliderRect.bottom).toBe(293.5);
    expect(sliderRect.left).toBe(635.21875);
    expect(sliderRect.right).toBe(835.21875);
  });

  it("should check for location of radio button", () => {
    const option1Element: HTMLLabelElement = fixture.nativeElement.querySelector('.custom-radio');
    const option2Element: HTMLLabelElement = fixture.nativeElement.querySelector('.custom-radio');

    expect(option1Element).toBeDefined();
    const option1Rect = option1Element.getBoundingClientRect();
    expect(option1Rect.top).toBe(386.5);
    expect(option1Rect.bottom).toBe(405);
    expect(option1Rect.left).toBe(580.234375);
    expect(option1Rect.right).toBe(619.7578125);

    expect(option2Element).toBeDefined();
    const option2Rect = option2Element.getBoundingClientRect();
    expect(option2Rect.top).toBe(386.5);
    expect(option2Rect.bottom).toBe(405);
    expect(option2Rect.left).toBe(580.234375);
    expect(option2Rect.right).toBe(619.7578125);
  });

  it("should check for location of background image", () => {
    const divWithBackgroundImage = fixture.nativeElement.querySelector('.container');
    const backgroundRect = divWithBackgroundImage.getBoundingClientRect();

    expect(backgroundRect.top).toBe(73);
    expect(backgroundRect.bottom).toBe(973);
    expect(backgroundRect.left).toBe(30);
    expect(backgroundRect.right).toBe(1170);
  })
});
