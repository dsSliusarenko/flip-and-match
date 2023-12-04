import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ScoreChartService} from "../../services/score-chart.service";

@Component({
  selector: 'fam-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private scoreChartService: ScoreChartService, public dialog: MatDialog
  ) {
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  resetScores(): void {
    this.scoreChartService.setDefaultChart();
    this.closeDialog();
  }
}
