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

  it('should go to color on clicking the go to color page button', function () {
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    const buttonWithText = buttons.find(button => button.nativeElement.textContent.includes('Click here to say your favourite color !'));

    expect(buttonWithText).not.toBeUndefined();

    const spy = spyOn(component, "navigateToColor");

    // @ts-ignore
    buttonWithText.nativeElement.click();

    expect(spy).toHaveBeenCalled();
  });

  it('should navigate and update url for color', () => {
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

  it('should navigate and update url for book', () => {
    const navigateSpy = spyOn(router, 'navigate');

    expect(router.url).toBe('/');

    // Trigger the navigation
    component.navigateToBook();

    // Wait for all asynchronous tasks to complete
    fixture.whenStable().then(() => {
      // Check if router.navigate was called with the correct argument
      expect(navigateSpy).toHaveBeenCalledWith(['book']);

      // Check the current URL
      expect(router.url).toBe('/book');
    });
  });
});
