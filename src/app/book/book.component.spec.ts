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
});
