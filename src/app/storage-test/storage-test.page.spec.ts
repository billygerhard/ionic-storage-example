import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StorageTestPage } from './storage-test.page';

describe('StorageTestPage', () => {
  let component: StorageTestPage;
  let fixture: ComponentFixture<StorageTestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorageTestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StorageTestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
