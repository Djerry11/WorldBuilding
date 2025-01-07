class Graph {
  constructor(points = [], segments = []) {
    this.points = points;
    this.segments = segments;
  }

  //------------------------- Point related functions -------------------------
  //Add a new point to the graph
  addPoint(point) {
    this.points.push(point);
  }

  //try to add a new point to the graph
  tryAddPoint(point) {
    if (!this.containsPoint(point)) {
      this.addPoint(point);
      return true;
    }
    return false;
  }
  //boolean check for duplicate points
  containsPoint(point) {
    return this.points.find((p) => p.equals(point));
  }

  //remove a point from the graph
  removePoint(point) {
    const segs = this.getSegmentsWithPoint(point);
    for (const seg of segs) {
      this.removeSegment(seg);
    }
    this.points.splice(this.points.indexOf(point), 1);
  }

  //------------------------- Segment related functions -------------------------
  //adding a new segment to the graph
  addSegment(segment) {
    this.segments.push(segment);
  }

  //check if the graph contains a segment
  containsSegment(segment) {
    return this.segments.find((seg) => seg.equals(segment));
  }
  //try to add a new segment to the graph
  tryAddSegment(segment) {
    if (!this.containsSegment(segment) && !segment.p1.equals(segment.p2)) {
      this.addSegment(segment);
      return true;
    }
    return false;
  }
  //remove a segment from the graph
  removeSegment(segment) {
    this.segments.splice(this.segments.indexOf(segment), 1);
  }

  //get all segments that contain a point
  getSegmentsWithPoint(point) {
    return this.segments.filter((seg) => seg.includes(point));
  }

  //------------------------- Graph related functions -------------------------
  //draw the graph
  draw(ctx) {
    for (const seg of this.segments) {
      seg.draw(ctx);
    }
    for (const point of this.points) {
      point.draw(ctx);
    }
  }

  //clear the graph
  dispose() {
    this.points.length = 0;
    this.segments.length = 0;
  }
}
