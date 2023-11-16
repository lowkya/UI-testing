import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import {FormsModule} from "@angular/forms";
import {AppComponent} from "../app.component";
import {Router, RouterModule} from "@angular/router";
import {By} from "@angular/platform-browser";
import {RouterTestingModule} from "@angular/router/testing";

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        RouterModule,
        RouterModule.forRoot([]),
        RouterTestingModule
      ],
      declarations: [HomeComponent]
    });

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Assignment5'`, () => {
    component.title = 'Assignment5';
    expect(component.title).toEqual('Assignment5');
  });

  it('should render title', () => {
    component.title = 'Assignment5';

    fixture.detectChanges();

    fixture.whenStable().then(() => {
      const runningAppComponent = fixture.debugElement.query(By.css('.highlight-card span'));

      // Check if runningAppComponent is not null before accessing its properties
      if (runningAppComponent) {
        const runningAppComponentText = runningAppComponent.nativeElement.textContent;
        expect(runningAppComponentText).toContain('Assignment5 app is running!');
      } else {
        fail('Could not find the element with class ".highlight-card span".');
      }
    });
  });

  it('should have slider', () => {
    const slider = fixture.nativeElement.querySelectorAll('input[type="range"]');
    expect(slider).not.toBeUndefined();
    expect(slider.length).toEqual(1);
  });

  it('should check for selected value of slider', () => {
    expect(fixture.nativeElement.querySelector('p').textContent).toEqual("Selected Value: 50");
    component.sliderValue = 25;

    fixture.detectChanges();

    const slider = fixture.nativeElement.querySelectorAll('input[type="range"]');
    expect(slider).not.toBeUndefined();
    expect(slider.length).toEqual(1);
    expect(fixture.nativeElement.querySelector('p').textContent).toEqual("Selected Value: 25");
  });

  it('should have button', () => {
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    const buttonWithText = buttons.find(button => button.nativeElement.textContent.includes('Click to go to page 2 !'));

    expect(buttonWithText).not.toBeUndefined();
  });

  it('should check for text on the  button', () => {
    const buttonElement = fixture.debugElement.query(By.css('button')).nativeElement
    expect(buttonElement).not.toBeUndefined();
    expect(buttonElement).not.toBeNull();
    expect(buttonElement.textContent).toBe("Click to go to page 2 !");
  });

  it('should have radio button', () => {
    const radioButtons = fixture.nativeElement.querySelectorAll('input[type="radio"]');
    expect(radioButtons).not.toBeUndefined();
    expect(radioButtons.length).toEqual(2);
    expect(radioButtons[0].value).toEqual("Yes");
    expect(radioButtons[1].value).toEqual("No");
  });

  it('radio buttons should work properly', () => {
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

  it('should go to page 2 on clicking the go to page 2 button',  () => {
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    const buttonWithText = buttons.find(button => button.nativeElement.textContent.includes('Click to go to page 2 !'));

    expect(buttonWithText).not.toBeUndefined();

    const spy = spyOn(component, "navigateToColor");

    // @ts-ignore
    buttonWithText.nativeElement.click();

    expect(spy).toHaveBeenCalled();
  });

  it('should navigate and update url to page 2', () => {
    const navigateSpy = spyOn(router, 'navigate');

    // Trigger the navigation
    component.navigateToColor();

    // Wait for all asynchronous tasks to complete
    fixture.whenStable().then(() => {
      // Check if router.navigate was called with the correct argument
      expect(navigateSpy).toHaveBeenCalledWith(['color']);

      // Check the current URL
      const currentUrl = router.url;
      expect(currentUrl).toBe('/color');
    });
  });

  it("should check for label for slider", () => {
    let sliderLabel = fixture.debugElement.query(By.css('label[for="customRange"]'));
    expect(sliderLabel).not.toBeUndefined();
    expect(sliderLabel.nativeElement.textContent).toBe("How are you doing today :");
  })

  it("should check for label for radio button", () => {
    let radioLabel = fixture.debugElement.query(By.css('.radio-label'));
    expect(radioLabel).not.toBeUndefined();
    expect(radioLabel.nativeElement.textContent.trim()).toEqual("What emoji represents your mood the best today ?")
  })

});
