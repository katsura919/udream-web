import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import type { ItineraryData } from './ItineraryPlanner';

// ─── Udream Brand Palette (matches globals.css light mode) ──────────────────
const C = {
  // Backgrounds
  parchment:      '#EBE6D9',   // --background
  parchmentLight: '#F4F1E8',   // --card
  parchmentMid:   '#DED9C9',   // --muted

  // Foreground / text
  bistre:         '#2E261E',   // --foreground
  bistreMid:      '#6B5E53',   // --muted-foreground

  // Primary — Adventure Red
  primary:        '#9E414C',
  primaryLight:   '#F7ECED',   // tint of primary
  primaryMid:     '#D4938B',   // lighter red for accents

  // Secondary — Desert Sand
  sand:           '#D4A373',
  sandLight:      '#F9F0E4',

  // Border
  border:         '#D1CEC4',

  white:          '#FFFFFF',
};

const styles = StyleSheet.create({
  // ── Page ──────────────────────────────────────────────────────────────────
  page: {
    paddingTop: 0,
    paddingBottom: 64,
    paddingHorizontal: 0,
    backgroundColor: C.parchment,
    fontFamily: 'Helvetica',
  },

  // ── Cover Band ────────────────────────────────────────────────────────────
  coverBand: {
    backgroundColor: C.bistre,
    paddingTop: 44,
    paddingBottom: 36,
    paddingHorizontal: 48,
    marginBottom: 32,
  },
  badgeRow: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  badge: {
    backgroundColor: C.primary,
    color: C.white,
    fontSize: 8,
    fontFamily: 'Helvetica-Bold',
    letterSpacing: 2,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  tripTitle: {
    fontSize: 30,
    fontFamily: 'Helvetica-Bold',
    color: C.parchment,
    marginBottom: 6,
  },
  tripDestination: {
    fontSize: 12,
    color: C.sand,
    fontFamily: 'Helvetica-Bold',
    letterSpacing: 1.5,
    marginBottom: 18,
  },
  dividerLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#3D342C',
    marginBottom: 16,
  },
  metaRow: {
    flexDirection: 'row',
    gap: 24,
  },
  metaChip: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  metaDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: C.primary,
    marginRight: 6,
  },
  metaLabel: {
    fontSize: 8,
    color: '#A8917E',
    fontFamily: 'Helvetica-Bold',
    letterSpacing: 1.2,
    marginRight: 4,
  },
  metaValue: {
    fontSize: 10,
    color: C.parchmentMid,
    fontFamily: 'Helvetica',
  },

  // ── Body ──────────────────────────────────────────────────────────────────
  body: {
    paddingHorizontal: 48,
  },

  // ── Stats Strip ───────────────────────────────────────────────────────────
  statsRow: {
    flexDirection: 'row',
    marginBottom: 28,
    borderWidth: 1,
    borderColor: C.border,
    borderRadius: 10,
    overflow: 'hidden',
  },
  statBox: {
    flex: 1,
    paddingVertical: 14,
    alignItems: 'center',
    backgroundColor: C.parchmentLight,
  },
  statBoxMiddle: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: C.border,
  },
  statNumber: {
    fontSize: 22,
    fontFamily: 'Helvetica-Bold',
    color: C.primary,
    marginBottom: 3,
  },
  statLabel: {
    fontSize: 8,
    color: C.bistreMid,
    letterSpacing: 1,
  },

  // ── Day Section ───────────────────────────────────────────────────────────
  daySection: {
    marginBottom: 22,
  },
  dayHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: C.primaryLight,
    borderLeftWidth: 4,
    borderLeftColor: C.primary,
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 6,
    marginBottom: 14,
  },
  dayBadge: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: C.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  dayBadgeText: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    color: C.white,
  },
  dayDateText: {
    fontSize: 14,
    fontFamily: 'Helvetica-Bold',
    color: C.bistre,
    marginRight: 8,
  },
  dayThemeText: {
    fontSize: 11,
    color: C.bistreMid,
    fontStyle: 'italic',
  },

  // ── Activity Row ──────────────────────────────────────────────────────────
  activityRow: {
    flexDirection: 'row',
    marginBottom: 10,
    paddingLeft: 4,
  },

  // Time column
  timeCol: {
    width: 68,
    alignItems: 'flex-end',
    paddingRight: 12,
    paddingTop: 4,
  },
  timeBadge: {
    backgroundColor: C.sand,
    borderRadius: 4,
    paddingVertical: 3,
    paddingHorizontal: 7,
  },
  timeText: {
    fontSize: 9,
    fontFamily: 'Helvetica-Bold',
    color: C.bistre,
  },
  timeEmpty: {
    fontSize: 9,
    color: C.bistreMid,
  },

  // Timeline connector
  timelineCol: {
    width: 18,
    alignItems: 'center',
    marginRight: 10,
  },
  timelineDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: C.parchmentLight,
    borderWidth: 2,
    borderColor: C.primary,
    marginTop: 4,
  },
  timelineLine: {
    width: 2,
    flex: 1,
    backgroundColor: C.border,
    marginTop: 3,
  },

  // Content card
  contentCol: {
    flex: 1,
    borderWidth: 1,
    borderColor: C.border,
    borderRadius: 8,
    padding: 11,
    backgroundColor: C.parchmentLight,
    marginBottom: 2,
  },
  activityTitle: {
    fontSize: 11,
    fontFamily: 'Helvetica-Bold',
    color: C.bistre,
    marginBottom: 5,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  locationLabel: {
    fontSize: 8,
    fontFamily: 'Helvetica-Bold',
    color: C.primary,
    marginRight: 3,
  },
  locationText: {
    fontSize: 9,
    color: C.primary,
  },
  notesRow: {
    marginTop: 5,
    paddingTop: 5,
    borderTopWidth: 1,
    borderTopColor: C.border,
  },
  notesLabel: {
    fontSize: 8,
    fontFamily: 'Helvetica-Bold',
    color: C.bistreMid,
    marginRight: 3,
  },
  notesText: {
    fontSize: 9,
    color: C.bistreMid,
  },

  // Empty
  emptyActivityBox: {
    backgroundColor: C.parchmentMid,
    borderWidth: 1,
    borderColor: C.border,
    borderRadius: 8,
    padding: 14,
    alignItems: 'center',
    marginBottom: 10,
  },
  emptyText: {
    fontSize: 10,
    color: C.bistreMid,
    fontStyle: 'italic',
  },

  // ── Footer ────────────────────────────────────────────────────────────────
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 48,
    right: 48,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: C.border,
  },
  footerText: {
    fontSize: 8,
    color: C.bistreMid,
  },
});

// ─── Helpers ────────────────────────────────────────────────────────────────
function formatDate(iso: string) {
  if (!iso) return '';
  try {
    return new Date(iso + 'T00:00:00').toLocaleDateString('en-US', {
      month: 'long', day: 'numeric', year: 'numeric',
    });
  } catch {
    return iso;
  }
}

// ─── Component ───────────────────────────────────────────────────────────────
export default function ItineraryPDFDocument({ data }: { data: ItineraryData }) {
  const totalActivities = data.days.reduce((s, d) => s + d.activities.length, 0);
  const dateFrom = formatDate(data.startDate);
  const dateTo   = formatDate(data.endDate);
  const destCity = data.destination ? data.destination.split(',')[0] : '';

  return (
    <Document title={data.tripTitle || 'My Trip Itinerary'} author="Udream Travel Planner">
      <Page size="A4" style={styles.page}>

        {/* ── Cover Band ─────────────────────────────────────────────── */}
        <View style={styles.coverBand}>
          <View style={styles.badgeRow}>
            <Text style={styles.badge}>TRAVEL ITINERARY</Text>
          </View>
          <Text style={styles.tripTitle}>{data.tripTitle || 'My Itinerary'}</Text>
          {data.destination ? (
            <Text style={styles.tripDestination}>{data.destination.toUpperCase()}</Text>
          ) : null}
          <View style={styles.dividerLine} />
          <View style={styles.metaRow}>
            {dateFrom ? (
              <View style={styles.metaChip}>
                <View style={styles.metaDot} />
                <Text style={styles.metaLabel}>FROM</Text>
                <Text style={styles.metaValue}>{dateFrom}</Text>
              </View>
            ) : null}
            {dateTo ? (
              <View style={styles.metaChip}>
                <View style={styles.metaDot} />
                <Text style={styles.metaLabel}>TO</Text>
                <Text style={styles.metaValue}>{dateTo}</Text>
              </View>
            ) : null}
          </View>
        </View>

        <View style={styles.body}>
          {/* ── Stats Strip ──────────────────────────────────────────── */}
          <View style={styles.statsRow}>
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>{data.days.length}</Text>
              <Text style={styles.statLabel}>{data.days.length === 1 ? 'DAY' : 'DAYS'}</Text>
            </View>
            <View style={[styles.statBox, styles.statBoxMiddle]}>
              <Text style={styles.statNumber}>{totalActivities}</Text>
              <Text style={styles.statLabel}>{totalActivities === 1 ? 'ACTIVITY' : 'ACTIVITIES'}</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>{destCity || '—'}</Text>
              <Text style={styles.statLabel}>DESTINATION</Text>
            </View>
          </View>

          {/* ── Days ─────────────────────────────────────────────────── */}
          {data.days.map((day, dayIdx) => (
            <View key={day.id} style={styles.daySection} wrap={false}>
              <View style={styles.dayHeader}>
                <View style={styles.dayBadge}>
                  <Text style={styles.dayBadgeText}>{dayIdx + 1}</Text>
                </View>
                <Text style={styles.dayDateText}>{day.date || `Day ${dayIdx + 1}`}</Text>
                {day.theme ? <Text style={styles.dayThemeText}>— {day.theme}</Text> : null}
              </View>

              {day.activities.length === 0 ? (
                <View style={styles.emptyActivityBox}>
                  <Text style={styles.emptyText}>No activities planned for this day.</Text>
                </View>
              ) : (
                day.activities.map((activity, aIdx) => (
                  <View key={activity.id} style={styles.activityRow}>
                    {/* Time badge */}
                    <View style={styles.timeCol}>
                      {activity.time ? (
                        <View style={styles.timeBadge}>
                          <Text style={styles.timeText}>{activity.time}</Text>
                        </View>
                      ) : (
                        <Text style={styles.timeEmpty}>--:--</Text>
                      )}
                    </View>

                    {/* Timeline */}
                    <View style={styles.timelineCol}>
                      <View style={styles.timelineDot} />
                      {aIdx < day.activities.length - 1 ? (
                        <View style={styles.timelineLine} />
                      ) : null}
                    </View>

                    {/* Content card */}
                    <View style={styles.contentCol}>
                      <Text style={styles.activityTitle}>
                        {activity.title || 'Untitled Activity'}
                      </Text>
                      {activity.location ? (
                        <View style={styles.locationRow}>
                          <Text style={styles.locationLabel}>Location:</Text>
                          <Text style={styles.locationText}>{activity.location}</Text>
                        </View>
                      ) : null}
                      {activity.notes ? (
                        <View style={styles.notesRow}>
                          <Text style={styles.notesText}>{activity.notes}</Text>
                        </View>
                      ) : null}
                    </View>
                  </View>
                ))
              )}
            </View>
          ))}
        </View>

        {/* ── Footer ───────────────────────────────────────────────────── */}
        <View style={styles.footer} fixed>
          <Text style={styles.footerText}>
            {data.tripTitle || 'Travel Itinerary'}{data.destination ? ` · ${data.destination}` : ''}
          </Text>
          <Text
            style={styles.footerText}
            render={({ pageNumber, totalPages }) => `Page ${pageNumber} / ${totalPages}`}
          />
        </View>
      </Page>
    </Document>
  );
}
