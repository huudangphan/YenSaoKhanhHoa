import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../pages/common/confirm-dialog/confirm-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class CartDialogService {
  constructor(private dialog: MatDialog) {}

  openConfirmDialog(onConfirm: () => void): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        onConfirm();
      }
    });
  }
}
