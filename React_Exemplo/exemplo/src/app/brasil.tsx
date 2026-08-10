import { ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

export default function BrasilScreen() {
  const safeAreaInsets = useSafeAreaInsets();
  const theme = useTheme();

  return (
    <ScrollView
      style={[styles.scrollView, { backgroundColor: theme.background }]}
      contentInset={{
        top: safeAreaInsets.top,
        left: safeAreaInsets.left,
        right: safeAreaInsets.right,
        bottom: safeAreaInsets.bottom + BottomTabInset + Spacing.three,
      }}
      contentContainerStyle={styles.contentContainer}>
      <ThemedView style={styles.container}>
        <ThemedText type="title" style={styles.title}>
          Conhecimentos Gerais do Brasil
        </ThemedText>

        <ThemedText type="subtitle" style={styles.subtitle}>
          Descubra fatos sobre geografia, história, cultura e atualidades brasileiras.
        </ThemedText>

        <View style={styles.section}>
          <ThemedText type="smallBold" style={styles.sectionTitle}>
            Geografia
          </ThemedText>
          <ThemedText style={styles.paragraph}>
            O Brasil é o maior país da América do Sul, cobrindo mais de 8,5 milhões de km² e
            possui a maior floresta tropical do mundo, a Amazônia.
          </ThemedText>
        </View>

        <View style={styles.section}>
          <ThemedText type="smallBold" style={styles.sectionTitle}>
            História
          </ThemedText>
          <ThemedText style={styles.paragraph}>
            O Brasil foi colonizado por Portugal em 1500 e se tornou independente em 1822, com
            Dom Pedro I proclamando a independência em 7 de setembro.
          </ThemedText>
        </View>

        <View style={styles.section}>
          <ThemedText type="smallBold" style={styles.sectionTitle}>
            Cultura
          </ThemedText>
          <ThemedText style={styles.paragraph}>
            A cultura brasileira é rica em música, dança e culinária. Samba, forró e feijoada são
            exemplos de tradições populares em várias regiões.
          </ThemedText>
        </View>

        <View style={styles.section}>
          <ThemedText type="smallBold" style={styles.sectionTitle}>
            Ciência e tecnologia
          </ThemedText>
          <ThemedText style={styles.paragraph}>
            O Brasil realizou grandes avanços na agropecuária, na produção de etanol e em pesquisa
            espacial com a Agência Espacial Brasileira.
          </ThemedText>
        </View>

        <View style={styles.section}>
          <ThemedText type="smallBold" style={styles.sectionTitle}>
            Atualidades
          </ThemedText>
          <ThemedText style={styles.paragraph}>
            O Brasil é um dos países com maior biodiversidade e segue sendo referência em temas
            ambientais, esportes e economia regional.
          </ThemedText>
        </View>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: Spacing.four,
    paddingTop: Spacing.four,
    paddingBottom: Spacing.four,
  },
  container: {
    maxWidth: MaxContentWidth,
    alignSelf: 'center',
    gap: Spacing.four,
  },
  title: {
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
  },
  section: {
    gap: Spacing.two,
    paddingVertical: Spacing.three,
  },
  sectionTitle: {
    fontSize: 20,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 26,
  },
});
