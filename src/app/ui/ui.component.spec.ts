import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { UiComponent } from './ui.component';

describe('Ui mean - Component', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiComponent ],
      imports: [FormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should call mean method', () => {
     // Arrange
     let result = 0;
     component.numero1A = 1;
     component.numero2A = 2;
     component.numero3A = 3;
     component.numero4A = 4;
     component.numero5A = 5;
     component.numero6A = 6;
     component.numero7A = 7;
     component.numero8A = 8;
     component.numero9A = 9;
     component.numero10A = 10;
     
     // Act
     component.mean();
     result = component.resultnumber;
 
     // Assert
     expect(result).toBe(5.5);
  });

  it('Should set numero1A model through ngModel', async() => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="numero1A"]')).nativeElement;

    // Act 
    inputElement.value = '3.1416';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.numero1A).toEqual(3.1416);
  });
 
  it('Should set numero2A model through ngModel', async() => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="numero2A"]')).nativeElement;

    // Act 
    inputElement.value = '2.71';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.numero2A).toEqual(2.71);
  });

  it('Should set numero3A model through ngModel', async() => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="numero3A"]')).nativeElement;

    // Act 
    inputElement.value = '2.71';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.numero3A).toEqual(2.71);
  });

  it('Should set numero4A model through ngModel', async() => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="numero4A"]')).nativeElement;

    // Act 
    inputElement.value = '3.1416';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.numero4A).toEqual(3.1416);
  });
 
  it('Should set numero5A model through ngModel', async() => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="numero5A"]')).nativeElement;

    // Act 
    inputElement.value = '2.71';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.numero5A).toEqual(2.71);
  });

  it('Should set numero6A model through ngModel', async() => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="numero6A"]')).nativeElement;

    // Act 
    inputElement.value = '2.71';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.numero6A).toEqual(2.71);
  });

  it('Should set numero7A model through ngModel', async() => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="numero7A"]')).nativeElement;

    // Act 
    inputElement.value = '2.71';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.numero7A).toEqual(2.71);
  });


  it('Should set numero8A model through ngModel', async() => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="numero8A"]')).nativeElement;

    // Act 
    inputElement.value = '2.71';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.numero8A).toEqual(2.71);
  });


  it('Should set numero9A model through ngModel', async() => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="numero9A"]')).nativeElement;

    // Act 
    inputElement.value = '2.71';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.numero9A).toEqual(2.71);
  });


  it('Should set numero10A model through ngModel', async() => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="numero10A"]')).nativeElement;

    // Act 
    inputElement.value = '2.71';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.numero10A).toEqual(2.71);
  });


  it('should add numero1A, numero2A, numero3A, numero4A, numero5A, numero6A, numero7A, numero8A, numero9A and numero10A when i click the mean button ', () => {
    // Arrange 
    component.numero1A = 1;
    component.numero2A = 2;
    component.numero3A = 3;
    component.numero4A = 4;
    component.numero5A = 5;
    component.numero6A = 6;
    component.numero7A = 7;
    component.numero8A = 8;
    component.numero9A = 9;
    component.numero10A = 10;
    let meanButton = fixture.debugElement.query(By.css('.mean-button'));

    // Act
    meanButton.triggerEventHandler('click', null);

    // Assert
    expect(component.resultnumber).toBe(5.5);

   });

  it('Should render sum in result div', () => {
    // Arrange
    component.numero1A = 1;
    component.numero2A = 2;
    component.numero3A = 3;
    component.numero4A = 4;
    component.numero5A = 5;
    component.numero6A = 6;
    component.numero7A = 7;
    component.numero8A = 8;
    component.numero9A = 9;
    component.numero10A = 10;
 
    // Act
    component.mean();
    fixture.detectChanges();
    
    let de = fixture.debugElement.query(By.css('.result'));
    let el : HTMLElement = de.nativeElement;

    // Assert
    expect(el.innerText).toContain('5.5');
     
  });

});

//Desviacion
describe('Ui deviation - Component', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiComponent ],
      imports: [FormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should call deviation method', () => {
     // Arrange
     let result = 0;
     component.numero1A = 1;
     component.numero2A = 2;
     component.numero3A = 3;
     component.numero4A = 4;
     component.numero5A = 5;
     component.numero6A = 6;
     component.numero7A = 7;
     component.numero8A = 8;
     component.numero9A = 9;
     component.numero10A = 10;
     
     // Act
     component.standardDeviation();
     result = component.resultnumber;
 
     // Assert
     expect(result).toBe(2.8722813232690143);
  });

  it('Should set numero1A model through ngModel', async() => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="numero1A"]')).nativeElement;

    // Act 
    inputElement.value = '3.1416';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.numero1A).toEqual(3.1416);
  });
 
  it('Should set numero2A model through ngModel', async() => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="numero2A"]')).nativeElement;

    // Act 
    inputElement.value = '2.71';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.numero2A).toEqual(2.71);
  });

  it('Should set numero3A model through ngModel', async() => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="numero3A"]')).nativeElement;

    // Act 
    inputElement.value = '2.71';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.numero3A).toEqual(2.71);
  });

  it('Should set numero4A model through ngModel', async() => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="numero4A"]')).nativeElement;

    // Act 
    inputElement.value = '3.1416';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.numero4A).toEqual(3.1416);
  });
 
  it('Should set numero5A model through ngModel', async() => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="numero5A"]')).nativeElement;

    // Act 
    inputElement.value = '2.71';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.numero5A).toEqual(2.71);
  });

  it('Should set numero6A model through ngModel', async() => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="numero6A"]')).nativeElement;

    // Act 
    inputElement.value = '2.71';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.numero6A).toEqual(2.71);
  });

  it('Should set numero7A model through ngModel', async() => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="numero7A"]')).nativeElement;

    // Act 
    inputElement.value = '2.71';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.numero7A).toEqual(2.71);
  });


  it('Should set numero8A model through ngModel', async() => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="numero8A"]')).nativeElement;

    // Act 
    inputElement.value = '2.71';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.numero8A).toEqual(2.71);
  });


  it('Should set numero9A model through ngModel', async() => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="numero9A"]')).nativeElement;

    // Act 
    inputElement.value = '2.71';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.numero9A).toEqual(2.71);
  });


  it('Should set numero10A model through ngModel', async() => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="numero10A"]')).nativeElement;

    // Act 
    inputElement.value = '2.71';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.numero10A).toEqual(2.71);
  });


  it('should add numero1A, numero2A, numero3A, numero4A, numero5A, numero6A, numero7A, numero8A, numero9A and numero10A when i click the mean button ', () => {
    // Arrange 
    component.numero1A = 1;
    component.numero2A = 2;
    component.numero3A = 3;
    component.numero4A = 4;
    component.numero5A = 5;
    component.numero6A = 6;
    component.numero7A = 7;
    component.numero8A = 8;
    component.numero9A = 9;
    component.numero10A = 10;
    let meanButton = fixture.debugElement.query(By.css('.deviation-button'));

    // Act
    meanButton.triggerEventHandler('click', null);

    // Assert
    expect(component.resultnumber).toBe(2.8722813232690143);

   });

  it('Should render sum in result div', () => {
    // Arrange
    component.numero1A = 1;
    component.numero2A = 2;
    component.numero3A = 3;
    component.numero4A = 4;
    component.numero5A = 5;
    component.numero6A = 6;
    component.numero7A = 7;
    component.numero8A = 8;
    component.numero9A = 9;
    component.numero10A = 10;
 
    // Act
    component.standardDeviation();
    fixture.detectChanges();
    
    let de = fixture.debugElement.query(By.css('.result'));
    let el : HTMLElement = de.nativeElement;

    // Assert
    expect(el.innerText).toContain('2.8722813232690143');
     
  });

});
