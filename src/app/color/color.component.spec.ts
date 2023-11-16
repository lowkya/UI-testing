import {ComponentFixture, TestBed, tick} from '@angular/core/testing';

import { ColorComponent } from './color.component';
import {FormsModule} from "@angular/forms";
import {By} from "@angular/platform-browser";
import {RouterTestingModule} from "@angular/router/testing";
import {Router} from "@angular/router";
import {routes} from "../app-routing.module";
import {async} from "rxjs";

describe('ColorComponent', () => {
  let component: ColorComponent;
  let fixture: ComponentFixture<ColorComponent>;
  let router: Router;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        RouterTestingModule,
        RouterTestingModule.withRoutes(routes),
      ],
      declarations: [ColorComponent]
    });

    router = TestBed.inject(Router);
    await router.navigate(['/color']);
    fixture = TestBed.createComponent(ColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    // Reset router state or perform any necessary cleanup
    TestBed.inject(Router).navigate(['/']);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have initial url', () => {
    fixture.detectChanges();
    expect(router.url).toBe('/color');
  });

  it('should check if button to go to page 3 exists', () => {
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    const buttonWithText = buttons.find(button => button.nativeElement.textContent.includes('Click to go to page 3 !'));

    expect(buttonWithText).not.toBeUndefined();
  });

  it('should check for text on button', () => {
    const buttonElement = fixture.debugElement.query(By.css('button')).nativeElement
    expect(buttonElement).not.toBeUndefined();
    expect(buttonElement).not.toBeNull();
    expect(buttonElement.textContent).toBe("Click to go to page 3 !");
  });

  it('should check if checkboxes exist', () => {
    const checkbox = fixture.nativeElement.querySelectorAll('input[type="checkbox"]');
    expect(checkbox).not.toBe(undefined);
    expect(checkbox.length).toBe(4);
  });

  it('should check working of checkboxes', () => {
    const checkbox = fixture.nativeElement.querySelectorAll('input[type="checkbox"]');
    expect(checkbox).not.toBe(undefined);
    expect(checkbox.length).toBe(4);

    expect(checkbox[0].checked).toBeFalse();
    expect(checkbox[1].checked).toBeTrue();
    expect(checkbox[2].checked).toBeFalse();
    expect(checkbox[3].checked).toBeTrue();

    checkbox[2].click();
    fixture.detectChanges();
    expect(checkbox[2].checked).toBeTrue();

    checkbox[2].click();
    fixture.detectChanges();
    expect(checkbox[2].checked).toBeFalse();
  });

  it('should check if background image exists', () => {
    const divWithBackgroundImage = fixture.nativeElement.querySelector('.container');
    const computedStyles = getComputedStyle(divWithBackgroundImage);
    const backgroundImage = computedStyles.getPropertyValue('background-image');
    expect(backgroundImage).toContain('color1-20191204062437970.jpg');
  });

  it('should check if list exists', () => {
    const itemList = fixture.nativeElement.querySelectorAll('ul li');
    expect(itemList).not.toBeUndefined();
    expect(itemList.length).toBe(4);
  });

  it('should have correct list items', () => {
    const itemList = fixture.nativeElement.querySelectorAll('ul li');
    expect(itemList).not.toBeUndefined();
    expect(itemList.length).toBe(4);

    expect(itemList[0].textContent).toEqual("Black");
    expect(itemList[1].textContent).toEqual("Purple");
    expect(itemList[2].textContent).toEqual("Lavender");
    expect(itemList[3].textContent).toEqual("Teal");
  });

  it('should take the flow to page 3', () => {
    const button = fixture.debugElement.query(By.css('button'));
    // const router = TestBed.inject(RouterTestingModule);
    const spy = spyOn(component, "navigateToBook");

    button.nativeElement.click();

    expect(spy).toHaveBeenCalled();
  });

  it('should update the url to take to page 3', () => {
    const navigateSpy = spyOn(router, 'navigate');

    expect(router.url).toBe('/color');

    // Trigger the navigation
    component.navigateToBook();

    // Wait for all asynchronous tasks to complete
    fixture.whenStable().then(() => {
      // Check if router.navigate was called with the correct argument
      expect(navigateSpy).toHaveBeenCalledWith(['/book']);
    });
  });

  it('should check if text box exists', () => {
    const textbox = fixture.nativeElement.querySelectorAll('input[type="text"]');
    expect(textbox).not.toBe(undefined);
    expect(textbox.length).toBe(1);
  });

  it('should check working of text box', () => {
    let textbox = fixture.nativeElement.querySelectorAll('input[type="text"]');
    expect(textbox).not.toBe(undefined);
    expect(textbox.length).toBe(1);
    console.log(textbox);
    expect(textbox[0].value).toEqual("");

    component.favouriteColor = "black";

    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(textbox[0].value).toEqual("black");
    });
  });

  it("should check for label of text box", () => {
    let label = fixture.nativeElement.querySelector('.form-label');
    expect(label).not.toBe(undefined);
    expect(label.textContent).toBe("Enter below your favourite color :");
  });

  it("should check for label of checkbox", () => {
    let checkBoxLabel = fixture.debugElement.query(By.css('.checkbox-label'));
    expect(checkBoxLabel).not.toBeUndefined();
    expect(checkBoxLabel.nativeElement.textContent.trim()).toEqual("Which of these are your favourite colors ?")
  });

  it("should check for heading on list", () => {
    let listHeading = fixture.debugElement.query(By.css('.list-p'));
    expect(listHeading).not.toBeUndefined();
    expect(listHeading.nativeElement.textContent.trim()).toEqual("These are my favourite colors :")
  })
});
